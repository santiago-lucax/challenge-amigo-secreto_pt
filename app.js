// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const friends = [];

// Função a qual faz a verificação e incremento dos nomes.
document.querySelector('.button-add').addEventListener('click', () =>{
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
    input.focus();
    input.value = '';
}

// Função que percorre todos os nomes já adicionado e exibe-os.
const listFriendsAdd = () => {
    const list = document.querySelector('#listaAmigos');
    list.innerHTML = '';  // Limpa a lista antes de adicionar os novos itens.

    for (i of friends) {
        let listChild = document.createElement('li');
        listChild.textContent = i;
        list.appendChild(listChild);
    }
}