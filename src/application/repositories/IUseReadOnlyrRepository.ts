import { User } from "@pbb/domain/user.entity";
import { injectable } from "inversify";


export default interface IUseReadOnlyrRepository {
    fetch(user: User): Promise<User>;
}