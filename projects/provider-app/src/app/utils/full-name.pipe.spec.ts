import { FullNamePipe } from './full-name.pipe';
import { testPatientProfile } from '../../../../patient-profile/src/lib/test.constants';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('formats correctly', () => {
    const formatedName = new FullNamePipe().transform(testPatientProfile);
    expect(formatedName).toEqual('Insurance P. Joan');
  });
});
