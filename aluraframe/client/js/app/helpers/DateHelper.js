class DateHelper {


    constructor() {

        throw new Error('DateHelper não pode ser instanciada');
    }

    dataParaTexto(texto){
        //trabalhando com formatações de data por exemplo.

        return data.getDate()
            + '/' + (data.data.getMonth() +1)
            + '/' + data.data.getFullYear();
    }

    //Static pode invocar o método sem precisar instânciar o mesmo

    static textoParaData(texto){

        return new Date(...this._inputData.value.split('-')
            .map( (item, indice) => item - indice % 2));
    }

}
