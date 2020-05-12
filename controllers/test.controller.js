let authoriseSvc;
export default class testController {
    constructor(injectedAuthoriseSvc) {
        authoriseSvc = injectedAuthoriseSvc
    }


    callHelloWorld(req, res) {
        res.send('Hello World !!!')
    }
}