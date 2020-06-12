
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
        let service = new NegociacaoService();

        /*Resolvendo as promises seguinda a ordem de forma assíncrona*/
        Promise.all([
            service.obterNegociacoesSemana(),
            service.obterNegociacoesSemanaAnterior(),
            service.obterNegociacoesSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
            .catch(error => this._mensagem.texto = error);
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
