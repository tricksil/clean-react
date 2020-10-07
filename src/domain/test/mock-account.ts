import { AuthenticationParams } from '@/domain/usecases';
import faker from 'faker';
import { AccountModel } from '@/domain/model';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
