import { User } from "@pbb/domain/user.entity";
import IUseReadOnlyrRepository from "../repositories/IUseReadOnlyrRepository";
import { ISignInUseCase } from "./ISigninUseCase";
import { IUserDto } from "./IUserDto";

export default class SigninUseCase implements ISignInUseCase {
    
    private _userReadOnlyRepository: IUseReadOnlyrRepository;
    
    constructor (userReadOnlyRepository: IUseReadOnlyrRepository) {
        this._userReadOnlyRepository = userReadOnlyRepository;
    }
    
    public async signin(userDto: IUserDto): Promise<IUserDto> {
        let user = new User(userDto.id, userDto.name, userDto.email, userDto.password, userDto.type );

        await this._userReadOnlyRepository.fetch(user);
    
        const foundUserDto = user;
        return foundUserDto;
    }
   

} 