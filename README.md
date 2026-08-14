# 📋 Lista de Tarefas (To-Do List) com API Rest

Uma aplicação web simples e objetiva para gerenciamento de tarefas. O grande diferencial deste projeto é a integração com uma API REST externa para persistência de dados, realizando operações assíncronas de Leitura, Criação e Exclusão (operações essenciais de CRUD).

## 🚀 Funcionalidades

- **Carregamento Automático:** Ao abrir a página, o sistema faz uma requisição `GET` para buscar e exibir todas as tarefas previamente salvas no banco de dados.
- **Criação de Tarefas:** Permite adicionar novas atividades à lista enviando requisições `POST`. O item é criado na API e renderizado dinamicamente na interface.
- **Exclusão de Tarefas:** Cada item da lista possui um botão de exclusão (`X`) que, ao ser clicado, dispara uma requisição `DELETE` para a API, removendo a tarefa tanto do servidor quanto da tela.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura básica da página e do formulário de inserção.
- **CSS3:** Estilização visual dos elementos da interface.
- **JavaScript:**
    - **Fetch API:** Utilizada para realizar as requisições HTTP (GET, POST, DELETE) de forma nativa.
    - **Promises (`.then()`):** Para gerenciamento de rotinas assíncronas e conversão do *payload* para o formato JSON.
    - **Manipulação do DOM:** Criação dinâmica de *tags* HTML (`document.createElement`), delegação de eventos e mapeamento de dados via `dataset.id`.
- **CrudCrud:** Serviço utilizado como backend provisório para fornecer os *endpoints* da API REST.

## ⚠️ Aviso Importante sobre a API (CrudCrud)

Este projeto utiliza o serviço [CrudCrud](https://crudcrud.com/) para armazenar os dados. No plano gratuito, os *endpoints* gerados por esse serviço expiram automaticamente após **24 horas**.

Se o projeto parar de salvar ou carregar as tarefas no seu ambiente local, basta:
1. Acessar o site do CrudCrud.
2. Copiar a nova URL (endpoint) fornecida na página inicial.
3. Substituir a URL antiga (`https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaTarefas`) nos três métodos `fetch` dentro do arquivo `script.js`.

## ⚙️ Como executar o projeto localmente

1. Faça o download de todos os arquivos (`index.html`, `styles.css` e `script.js`).
2. Mantenha os arquivos no mesmo diretório.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador.

## 👩‍💻 Autora

Desenvolvido por **Eduarda Ferreira Costa** &copy; 2026.