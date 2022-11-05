import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/useCases/addAccount'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const newAccount = await accountCollection.findOne({ _id: id })
    return {
      id: newAccount?._id ? newAccount?._id.toString() : '',
      email: newAccount?.email,
      name: newAccount?.name,
      password: newAccount?.password
    }
  }
}
