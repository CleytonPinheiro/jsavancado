class ListaNegociacoes{

    constructor() {

        this._negociacoes =[];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    get negociacoes(){

        //* concat = brindando o método para não possibilitar alterar, sim, possibilita adicionar na cópia de negociação
        return [].concat(this._negociacoes);
    }
}
