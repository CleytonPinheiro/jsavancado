class Bind {

    /* REST OPERATOR (...)*/
    constructor (model, view, ...props){
        let proxy = ProxyFactory.create(model, props, model =>
        view.update(model));

        view.update(model);

        //Sim, constructor retorna proxy!!
        return proxy;
    }
}
