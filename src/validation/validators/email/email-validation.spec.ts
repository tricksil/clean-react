import faker from 'faker';

import { InvalidFieldError } from '@/validation/error';
import { EmailValidation } from './email-validation';

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email');
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError());
  });

  test('Should return falsy if email is not invalid', () => {
    const sut = new EmailValidation('email');
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });
});
