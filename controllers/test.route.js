var testRoute = (router, expressApp, testMethods) => {
    router.get('/hello', testMethods.callHelloWorld);
    return router;
}


const _testRoute = testRoute;
export { _testRoute as testRoute };