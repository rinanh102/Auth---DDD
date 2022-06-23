import IUseReadOnlyrRepository from "@pbb/application/repositories/IUseReadOnlyrRepository";
import { User } from "@pbb/domain/user.entity";
import { injectable } from "inversify";

@injectable()
export default class UserRepository implements IUseReadOnlyrRepository {
    public async fetch(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }


}