//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const friends = [];

document.querySelector('.button-add').addEventListener('click', () =>{
    const input = document.querySelector('#amigo');

    //Condição que verifica se o valor do input é um número ou está vazio.
    if (input.value === '' || !isNaN(input.value)) {
        alert('Por favor, insira um nome.');
    } else {
        friends.push(input.value);
    }

    //Chamada da função que limpa e da um foco no input.
    limpaAndFocus(input);
});

//Função que limpa o valor do input e foca para inserir um novo nome.
const limpaAndFocus = (input) => {
    input.focus();
    input.value = '';
}