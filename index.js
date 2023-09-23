function receivesAFunction(spy) {
    return spy();
};

function returnsANamedFunction() {
    return (function a(){});
};

function returnsAnAnonymousFunction(){
    return (function(){});
};