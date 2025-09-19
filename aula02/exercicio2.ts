// Definindo o array com os nomes das cidades
const cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba"];

// Função que recebe um array de cidades e imprime no console
function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => {
        console.log(cidade);
    });
}

// Chamando a função para listar as cidades
listarCidades(cidades)