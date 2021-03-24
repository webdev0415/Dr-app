import { SelectOptionsPipe } from './select-options.pipe';

describe('SelectOptionsPipe', () => {
  const pipe = new SelectOptionsPipe();

  it('should return empty array', () => {
    expect(pipe.transform(null, null).length).toEqual(0);
  });

  it('should map string[] to Object[]', () => {
    const mappedOptions = pipe.transform(['a', 'b'], 'b');
    expect(mappedOptions[0]).toEqual({value: 'a', label: 'a'});
  });

  it('should append value to options', () => {
    const mappedOptions = pipe.transform(['a', 'b'], 'c');
    expect(mappedOptions[2]).toEqual({value: 'c', label: 'c'});
  });
});
