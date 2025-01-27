# Desafio Amigo Secreto

Este projeto foi desenvolvido como parte de um desafio para fortalecer as habilidades em lógica de programação. O objetivo principal é criar um sistema de sorteio de "Amigo Secreto", onde os nomes dos amigos são inseridos, e o sistema sorteia um amigo para cada um.

## Funcionalidades

- O usuário pode adicionar nomes à lista de amigos.
- O sistema verifica se o nome inserido é válido (não é vazio nem numérico).
- Os nomes são armazenados em um array e exibidos em uma lista na interface.
- Ao clicar no botão de sorteio, o sistema sorteia um amigo secreto aleatório da lista e exibe o resultado.
- Após o sorteio, o nome sorteado é removido da lista, para garantir que cada amigo será sorteado apenas uma vez.
- O sistema também exibe uma mensagem de erro caso o usuário tente fazer o sorteio sem ter inserido nenhum nome ou se todos os amigos já foram sorteados.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilos básicos para a interface.
- **JavaScript**: Lógica para adicionar nomes, realizar sorteios e gerenciar o fluxo de dados.

## Como Usar

### Passo 1: Adicionar Amigos

1. Insira o nome de um amigo no campo de texto.
2. Clique no botão "Adicionar".
3. O nome será adicionado à lista de amigos e exibido abaixo.

### Passo 2: Realizar o Sorteio

1. Após adicionar pelo menos um nome à lista, clique no botão "Sorteio".
2. O sistema irá sortear aleatoriamente um nome da lista e exibir o nome sorteado.
3. O nome sorteado será removido da lista automaticamente.
4. Se todos os amigos já tiverem sido sorteados, uma mensagem de alerta será exibida solicitando que você adicione mais nomes.

### Passo 3: Continuar o Sorteio

1. Se ainda houver amigos na lista, você pode continuar realizando o sorteio.
2. O processo continua até que todos os nomes tenham sido sorteados.

## Funcionalidades Técnicas

- **Verificação de Entrada**: Antes de adicionar um nome, o sistema verifica se o valor inserido não é um número e se não está vazio.
- **Limpeza de Campos**: Após adicionar um nome, o campo de entrada é limpo automaticamente e o foco é mantido no campo para que você possa adicionar outro nome rapidamente.
- **Sorteio Aleatório**: O sorteio é feito com um número aleatório gerado usando `Math.random()`, garantindo que o sorteio seja imparcial.
- **Remoção de Nomes Sorteados**: Após cada sorteio, o nome sorteado é removido da lista de amigos para que não seja sorteado novamente.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/santiago-lucax/challenge-amigo-secreto_pt.git
   ```

2. Abra o arquivo `index.html` em seu navegador.

## Contribuições

Se você quiser contribuir para o projeto, basta fazer um fork do repositório, fazer suas alterações e enviar um pull request com a descrição das modificações.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.