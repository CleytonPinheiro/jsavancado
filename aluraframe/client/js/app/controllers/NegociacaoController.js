
class NegociacaoController {
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //Isolando responsabilidade das classes em formatação da instância

        let data = new DateHelper().textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
          data,
          this._inputQuantidade.value,
          this._inputValor.value
        );




    }
}
