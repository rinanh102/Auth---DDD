import "reflect-metadata"
import * as bodyParser from "body-parser"
import { Application } from "express";
import { Container } from "inversify"
import { InversifyExpressServer } from "inversify-express-utils";
import IUseReadOnlyrRepository from "./application/repositories/IUseReadOnlyrRepository";
import AuthServiceLocator from "./configuration/usecases/AuthServiceLocator";
import { TYPES } from "./constants/types";
import UserRepository from "./infrastructure/UserRepository";

const container = new Container();

//set up all binding
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator);
container.bind<IUseReadOnlyrRepository>(TYPES.IUseReadOnlyrRepository).to(UserRepository);

const server = new InversifyExpressServer(container);

server.setConfig((application: Application) => {
    application.use(bodyParser.urlencoded({extended: true}));
    application.use(bodyParser.json());
})

const app = server .build()

app.listen(5000, () => {
    console.log (`server started at http:localhost:${5000}`);
})

