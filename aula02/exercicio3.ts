// Definindo a interface Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Criando um objeto do tipo Livro com dados fictícios
const meuLivro: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
};

// Função que recebe um objeto do tipo Livro e exibe suas informações no console
function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

// Chamando a função para exibir os dados do livro
exibirLivro(meuLivro);