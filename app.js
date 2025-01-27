// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const friends = [];
const list = document.querySelector('#listaAmigos');

// Evento com a função a qual faz a verificação e incremento dos nomes.
document.querySelector('.button-add').addEventListener('click', () => {
    const input = document.querySelector('#amigo');

    // Condição que verifica se o valor do input é um número ou está vazio.
    if (input.value === '' || !isNaN(input.value)) {
        alert('Por favor, insira um nome.');
    } else {
        friends.push(input.value);
    }

    // Chamada da função que limpa e da um foco no input.
    clearAndFocus(input);
    listFriendsAdd();
});

// Função que limpa o valor do input e foca para inserir um novo nome.
const clearAndFocus = (input) => {
    input.focus(); // Coloca um foco na barra de input.
    input.value = ''; // Zera o valor que está na barra de input.
}

// Função que percorre todos os nomes já adicionado e exibe-os.
const listFriendsAdd = () => {
    list.innerHTML = '';  // Limpa a lista antes de adicionar os novos itens.

    for (i of friends) {
        let listChild = document.createElement('li'); // Cria um elemento <li> em HTML.
        listChild.textContent = i; // O texto que será inserido nesse <li> será os elementos da array.
        list.appendChild(listChild); // Adiciona o <li> a tag <ul> no HTML.
    }
}

// Função que sorteia os nomes, levando em consideração os índices de 0 a o tamanho total do array lista dos nomes menos um.
const friendSorted = (numSortedInArray) => {
    return Math.floor(Math.random() * ((numSortedInArray.length - 1) - (0 - 1)) + 0); // Retorna um valor entre 0 e o tamanho total da array menos um.
}

// Evento com a função a qual verifica se a array 'friends' há algum valor, se sim, digita um nome aleatório na tela.
document.querySelector('.button-draw').addEventListener('click', () => {
    if (friends.length) {
        list.innerHTML = '';  // Limpa a lista antes de adicionar os novos itens.
        const randomValue = friendSorted(friends);
        document.querySelector('#resultado').innerHTML = `O amigo secreto sorteado é: ${friends[randomValue]}`;
    } else {
        alert('Você ainda não digitou amigo algum!'); // Caso você não tenha digitado nenhum amigo ainda, exibirá este erro.
    }
});