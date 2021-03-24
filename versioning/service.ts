import { join } from 'path';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

const versionParts: any = {major: 0, minor: 1, patch: 2};

const indexBasePath = join(__dirname, '..', 'src');
const exec = require('child_process').exec;

function escapeString (string) {
  if (!/^[A-Za-z0-9_\/-]+$/.test(string)) {
    string = '\'' + string.replace(/'/g, `'\\''`) + '\'';
    string = string.replace(/^(?:'')+/g, '')
      .replace(/\\'''/g, `\\'` );
  }
  return string;
}

export function getMergeRequestCommitHash() {
  return new Observable<string>(o => {
    exec(`git log --pretty=%P -n 1 $CI_COMMIT_SHA | awk "/ /"'{print $2}'`,
      function (error: Error, stdout: Buffer, stderr: Buffer) {
        if (error !== null) {
          console.log('git error: ' + error + stderr);
        }
        const res = stdout.toString().trim();
        if (res) {
          console.log('hash found:', res);
          o.next(res);
        } else {
          console.log('hash not found');
          o.error('NOT_FOUND');
        }
        o.complete();
      });
  });
}

export function getMergeRequestId(hash: string): Observable<string> {
  return new Observable<string>(o => {

    const repoAddressWithAccess = _.replace(
      process.env.CI_REPOSITORY_URL as string,
      /gitlab-ci-token.*@/,
      `private-token:${escapeString(process.env.GIT_PRIVATE_TOKEN)}@`
    );

    exec(`git ls-remote ${escapeString(repoAddressWithAccess)} refs/merge-requests/[0-9]*/head | awk \"/${escapeString(hash)}/\"'{print $2}' | cut -d '/' -f3`,
      function (error: Error, stdout: Buffer, stderr: Buffer) {
        if (error !== null) {
          console.log('git error: ' + error + stderr);
        }
        const res = stdout.toString().trim();
        if (res) {
          console.log('MR found:', res);
          o.next(res.trim().split(/[\r\n\s]+/g).pop());
        } else {
          console.log('MR not found');
          o.error('NOT_FOUND');
        }
        o.complete();
      });
  });
}

export function getMergeRequestInfo(id: string): Observable<any> {
  return new Observable<any>(o => {
    exec(`curl --header "PRIVATE-TOKEN: $GIT_PRIVATE_TOKEN" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/merge_requests/${escapeString(id)}`,
      function (error: Error, stdout: Buffer, stderr: Buffer) {
        let res;

        if (error !== null) {
          console.log('git error: ' + error + stderr);
        }

        try {
          res = JSON.parse(stdout.toString());
        } catch (err) {
          console.log('can\'t get MR info', err);
        }

        if (!res) {
          o.error('NOT_FOUND');
        } else if (!res.iid) {
          o.error(new Error(res.error || res.message));
        } else {
          console.log('got MR info', res);
          o.next(res);
        }
        o.complete();
      });
  });
}

export function parseLabels(mrInfo: {labels: string[], targetBranch: string }): Observable<string> {
  let res = '';

  if (mrInfo.targetBranch && mrInfo.targetBranch === 'master') return Observable.of(null);
  if (!mrInfo.labels) return fail();

  for (let i = 0; i < mrInfo.labels.length; i++) {
    const part = mrInfo.labels[i];
    const partKey = versionParts[part];
    if ((!res && partKey !== undefined) || (res && partKey < versionParts[res])) res = part;
  }

  if (res) {
    console.log('label found:', res);
    return Observable.of(res);
  } else {
    return fail();
  }

  function fail() {
    console.log('labels not found, using patch');
    return Observable.of('patch');
  }
}

export function updateVersion(partKey?: string): Observable<string> {
  return getRevision()
    .map(parseVersion)
    .map(version => {
      const presc = `/*\n* This file is automatically created by git.versions.ts\n* Do not edit it manually! \n*/\n`;
      let newVersion = version;
      if (partKey) {
        console.log('updating version...');
        newVersion = upgradeVersion(version, partKey);
      } else {
        console.log('using current version');
      }

      const versionJSON = JSON.stringify({app: newVersion});
      const content = `${presc}\nexport const versions = ${versionJSON};\n`;

      const repoAddressWithAccess = _.replace(
        process.env.CI_REPOSITORY_URL as string,
        /gitlab-ci-token.*@/,
        `private-token:${escapeString(process.env.GIT_PRIVATE_TOKEN)}@`
      );
      if (partKey) {
        exec(`git checkout $CI_COMMIT_REF_NAME
        git pull ${escapeString(repoAddressWithAccess)} $CI_COMMIT_REF_NAME
        printf "${content.replace(/"/gi, `\'`)}" > ${indexBasePath}/environments/versions.ts
        printf "${versionJSON.replace(/"/gi, `\\"`)}" > ${indexBasePath}/assets/versions.json
        git push
        git add "${escapeString(indexBasePath)}/environments/versions.ts"
        git add "${escapeString(indexBasePath)}/assets/versions.json"
        git commit -m ${escapeString('Upgrade version to v' + newVersion)}
        git tag v${newVersion}
        git push ${escapeString(repoAddressWithAccess)} $CI_COMMIT_REF_NAME
        git push ${escapeString(repoAddressWithAccess)} --tags`,
          function (error: Error, stdout: Buffer, stderr: Buffer) {
            if (error !== null) {
              console.log('git error: ' + error + stderr);
            }
          });
        return newVersion;
      }
    });
}

export function setGitTag(version: string): Observable<void> {
  return getRevision()
    .map(parseVersion)
    .filter(currentVersion => {
      const [majorC, minorC, patchC] = _.split(currentVersion, '.');
      const [major, minor, patch] = _.split(version, '.');
      return (major > majorC) || (minor > minorC) || (patch > patchC);
    })
    .switchMap(() => new Observable<any>(o => {
      const repoAddressWithAccess = _.replace(
        process.env.CI_REPOSITORY_URL as string,
        /gitlab-ci-token.*@/,
        `private-token:${escapeString(process.env.GIT_PRIVATE_TOKEN)}@`
      );
      const tagName = `v${version}`;

      exec(`git stash
      git checkout $CI_COMMIT_REF_NAME
      git pull ${escapeString(repoAddressWithAccess)} $CI_COMMIT_REF_NAME
      git stash apply
      git stash clear
      git add "${escapeString(indexBasePath)}/environments/versions.ts"
      git commit -m ${escapeString('[ci skip] ' + tagName)}
      git tag ${escapeString(tagName)}
      git push ${escapeString(repoAddressWithAccess)} $CI_COMMIT_REF_NAME
      git push ${escapeString(repoAddressWithAccess)} --tags`,
        function (error: Error, stdout: Buffer, stderr: Buffer) {
          if (error !== null) {
            console.log('error: ' + error + stderr);
            o.error(error + stderr.toString());
          }
          o.complete();
        });
    }));
}

function getRevision(): Observable<string> {
  return new Observable<string>(o => {
    exec(`curl --header "PRIVATE-TOKEN: $GIT_PRIVATE_TOKEN" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/repository/tags`,
      function (error: Error, stdout: Buffer, stderr: Buffer) {
        let res;

        if (error !== null) {
          console.log('curl error: ' + error + stderr);
        }

        try {
          res = JSON.parse(stdout.toString());
        } catch (err) {
          console.log('can\'t get tags info', err);
        }

        if (!res) {
          o.error('NOT_FOUND');
        } else if (!res[0]) {
          o.error('NO_TAGS');
        } else {
          console.log('latest tag:', res[0].name);
          o.next(res[0].name.trim());
        }
        o.complete();
      });
  });
}

function parseVersion(version: string) {
  return _.replace(version, /[a-zA-Z]/, '');
}

function upgradeVersion(version: string, partKey: string) {
  const parts: any[] = _.split(version, '.');
  const idx = versionParts[partKey];

  _.mapValues(versionParts, v => {
    if (v === idx) ++parts[v];
    else if (v > idx) parts[v] = 0;
  });

  return _.join(parts, '.');
}
