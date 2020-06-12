class NegociacaoService {

    obterNegociacoesSemana() {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                /* Estados possíveíes requisições AJAX:
                 0: requisição ainda não iniciada,
                 1. conexao com servidor estabelecida,
                 2.requisição recebida,
                 3: processando requisição,
                 4: requisição concluída e a resposta está pronta.*/

                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText).map(objeto => new Negociacao(
                            new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana');
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesSemanaAnterior() {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                /* Estados possíveíes requisições AJAX:
                 0: requisição ainda não iniciada,
                 1. conexao com servidor estabelecida,
                 2.requisição recebida,
                 3: processando requisição,
                 4: requisição concluída e a resposta está pronta.*/

                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve( JSON.parse(xhr.responseText).map(objeto => new Negociacao(
                            new Date(objeto.data), objeto.quantidade, objeto.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior');
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesSemanaRetrasada() {

        return new Promise((resolve, reject) =>{
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                /* Estados possíveíes requisições AJAX:
                 0: requisição ainda não iniciada,
                 1. conexao com servidor estabelecida,
                 2.requisição recebida,
                 3: processando requisição,
                 4: requisição concluída e a resposta está pronta.*/

                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve( JSON.parse(xhr.responseText).map(objeto => new Negociacao(
                            new Date(objeto.data), objeto.quantidade, objeto.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasada');
                    }
                }
            };
            xhr.send();
        });
    }


}

