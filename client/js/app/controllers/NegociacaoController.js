
class NegociacaoController {
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');

        /* _listanegociações = proxy
         Associando o model com a view para se autoatualizarem */

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia')

        this._mensagem = new Bind(new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event) {
        event.preventDefault();
        //*Isolando responsabilidade das classes em formatação da instância
        //*let data = new DateHelper().textoParaData(this._inputData.value);
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }

    importaNegociacoes() {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
        /* Estados possíveíes requisições AJAX:
         0: requisição ainda não iniciada,
         1. conexao com servidor estabelecida,
         2.requisição recebida,
         3: processando requisição,
         4: requisição concluída e a resposta está pronta.*/

         if (xhr.readyState == 4){
             if (xhr.status == 200){
                 JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                     .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                 this._mensagem.texto = 'Negociações importadas com sucesso.';

             }else{
                 this._mensagem.texto = 'Não foi possível importar as negociações.';
             }
         }

        };
        xhr.send();

    }
    apaga(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
