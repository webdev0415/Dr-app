import {
  getMergeRequestCommitHash,
  getMergeRequestId,
  getMergeRequestInfo,
  parseLabels,
  updateVersion
} from './service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

getMergeRequestCommitHash()
  .pipe(
    switchMap(getMergeRequestId),
    switchMap(getMergeRequestInfo),
    map(mr => ({ labels: mr.labels, targetBranch: mr.target_branch})),
    switchMap(parseLabels),
    switchMap(updateVersion),
    catchError((err: any) => {
      console.log(`Can't update version`, err);
      return of(null);
    })
  )
  .subscribe(res => {
    if (res) {
      console.log('done\nversion to build:', res);
    }
  });

