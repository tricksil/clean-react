import { MinLengthValidation } from './min-length-validation';
import { InvalidFieldError } from '@/validation/error';

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5);
    const error = sut.validate('123');
    expect(error).toEqual(new InvalidFieldError());
  });

  test('Should return falsy if value is not invalid', () => {
    const sut = new MinLengthValidation('field', 5);
    const error = sut.validate('12345');
    expect(error).toBeFalsy();
  });
});
