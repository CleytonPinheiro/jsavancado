class MensagemView  extends View {

    constructor(elemento) {

        //* super -> Enviando para a classe pai devido a extensão da classe
        super(elemento);
    }

    template (model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p> </p>';
    }

}
