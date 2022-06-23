import chai from "chai"
import "mocha"
import { it } from "mocha"
import simon, { SinonSandbox } from "sinon"
import sinonChai from "sinon-chai"
import AuthServiceLocator from "../../src/configuration/usecases/AuthServiceLocator";


const  { expect } = chai;

chai.use(sinonChai)

describe("Auth Controller", () => {
    let sut: AuthController;
    let sandbox: SinonSandbox = null;
    let serverLocator: AuthServiceLocator;


    const user = {
        emmail: "viet@gmail.com",
        id: "1234",
        name: "henry",
        password: "pass",
        type: "email"
    }
})
