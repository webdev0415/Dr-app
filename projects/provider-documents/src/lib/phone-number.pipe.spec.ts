import { PhoneNumberPipe } from '../../../provider-documents/src/lib/phone-number.pipe';


describe('PhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
  it('formats correctly', () => {
    const formatedNumber = new PhoneNumberPipe().transform(1234567890);
    expect(formatedNumber).toEqual('(123) 456-7890');
  });
});
