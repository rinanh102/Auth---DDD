import IUseReadOnlyrRepository from "@pbb/application/repositories/IUseReadOnlyrRepository"
import SigninUseCase from "@pbb/application/usecase/SignInUseCase"
import { TYPES } from "@pbb/constants/types"
import { inject, injectable } from "inversify"

@injectable()
export default class AuthServiceLocator { 


    constructor(
        @inject(TYPES.IUseReadOnlyrRepository) private readRepository: IUseReadOnlyrRepository
    ) {}

    /**
     * GetSignInUseCase
     */
    public GetSignInUseCase() {
        return new SigninUseCase(this.readRepository) 
    }
}