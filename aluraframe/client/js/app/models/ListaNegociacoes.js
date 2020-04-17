class ListaNegociacoes{

    constructor(contexto,armadilha) {

        this._negociacoes =[];
        this._armadilha =  armadilha;
        this._contexto = contexto;
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
       //this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this]);

    }

    get negociacoes(){

        //* concat = brindando o método para não possibilitar alterar, sim, possibilita adicionar na cópia de negociação
        return [].concat(this._negociacoes);
    }

    esvazia(){

        this._negociacoes = [];
        //this._armadilha(this);
    }
}
