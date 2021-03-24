import { Utils } from './utils';


describe('Utils', () => {
  it('should round number', (() => {
    const rounded = Utils.preciseRound(2.3456, 2);
    expect(rounded).toEqual('2.35');
  }));
  it('should round negative number', (() => {
    const rounded = Utils.preciseRound(-2.3456, 2);
    expect(rounded).toEqual('-2.35');
  }));
});
