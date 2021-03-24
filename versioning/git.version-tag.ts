import {setGitTag} from './service';
import {versions} from '../projects/provider-app/src/environments/versions';

setGitTag(versions.app).subscribe(() => console.log('git successfully set:', versions.app));
