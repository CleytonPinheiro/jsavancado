class DateHelper {


    constructor() {

        throw new Error('DateHelper não pode ser instanciada');
    }

    dataParaTexto(texto){
        //*trabalhando com formatações de data por exemplo.

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    //*Static pode invocar o método sem precisar instânciar o mesmo

    static textoParaData(texto){

        if (!/\d{4}-\d{2}-\d{2}/)
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...this._inputData.value.split('-')
            .map( (item, indice) => item - indice % 2));
    }

}
