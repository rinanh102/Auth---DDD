import { IUserDto } from "./IUserDto";

export interface ISignInUseCase {
    signin(userDto: IUserDto): Promise<IUserDto>;
}