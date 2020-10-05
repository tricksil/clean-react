import { AccountModel } from '../model/account-model'

type AuthencticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthencticationParams) => Promise<AccountModel>
}
