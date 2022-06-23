import { ISignInUseCase } from "@pbb/application/usecase/ISigninUseCase"
import AuthServiceLocator from "@pbb/configuration/usecases/AuthServiceLocator";
import { TYPES } from "@pbb/constants/types";
import { inject } from "inversify";
import { controller, httpPost, interfaces, response, request } from "inversify-express-utils"
import { Request, Response } from "express";
import { IUserDto } from "@pbb/application/usecase/IUserDto";

@controller("/auth")
export default class AuthController implements interfaces.Controller {
    private readonly _signInUseCase: ISignInUseCase;

    constructor (@inject(TYPES.AuthServiceLocator) private authServiceLovator : AuthServiceLocator) {
        this._signInUseCase = authServiceLovator.GetSignInUseCase();

    }
    @httpPost("/signin")
    public async signin(@request() req: Request, @response() res: Response ) {
        const userDto: IUserDto = req.body;
        return this._signInUseCase.signin(userDto)
                .then((foundUserDto: IUserDto) => res.status(200).json(foundUserDto))
                .catch((err: Error) => res.status(400).json({err: err.message}))
    }
}
