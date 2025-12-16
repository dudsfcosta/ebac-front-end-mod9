// Seleciona a ul com a lista de tarefas no HTML
const clientes = document.getElementById("tabelaClientes");

fetch("https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaClientes")
    // converte o corpo da resposta em json
    .then(resposta => resposta.json())
    .then((listaDeClientes) => {

        // itera sobre caa tarefa do array
        listaDeClientes.forEach(cliente => {

            // elemento de lista <li> para cada cliente
            const item = document.createElement("tr");
            // define o conteúdo HTML com descrição e botão
            item.innerHTML = `<tr>
                                    <td>${cliente.cliente}</td>
                                    <td>${cliente.email}</td>
                                    <td><button class="delete" id="${cliente._id}">X</button></td>
                               </tr>`;

            // adiciona o id da cliente no li
            item.dataset.id = cliente._id;
            item.querySelector(".delete").addEventListener("click", () => {

                fetch(`https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaClientes/${cliente._id}`, {
                    method: "DELETE"
                }).then(() => {

                    item.remove();
                })
            });
            // adiciona o item à lista de tarefas
            console.log(item);
            clientes.appendChild(item);
        });
    });

// EventListener para o botão "adicionar"
document.getElementById("add").addEventListener("click", ()=> {

    // Pega a descrição que o usuário adicionou com o id cliente
    const cliente = document.getElementById("cliente").value;
    const email = document.getElementById("email").value;
    // Faz requisição POST para a API externa criar a cliente
    fetch("https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaClientes", {

        // Definido como POST, mas pode variar entre GET, POST, PUT, DELETE
        method: "POST",
        // Define o cabeçalho da requisição como tipo do conteúdo JSON
        headers: {

            "Content-Type": "application/json"
        },
        // converte um objeto JS para uma string JSON e passa no corpo da requisição
        body: JSON.stringify({cliente: cliente,
                                    email: email})
    })
        .then(resposta => resposta.json())
        .then((cliente) => {

            // elemento de lista <li> para cada cliente
            const itemCreated = document.createElement("tr");
            // define o conteúdo HTML com descrição e botão
            itemCreated.innerHTML = `<tr>
                                    <td>${cliente.cliente}</td>
                                    <td>${cliente.email}</td>
                                    <td><button class="delete" id="${cliente._id}">X</button></td>
                               </tr>`;

            // adiciona o id da cliente no li
            itemCreated.dataset.id = cliente._id;
            itemCreated.querySelector(".delete").addEventListener("click", () => {

                fetch(`https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaClientes/${cliente._id}`, {
                    method: "DELETE"
                }).then(() => {

                    itemCreated.remove();
                })
            });
            // adiciona o itemCreated à lista de clientes
            clientes.appendChild(itemCreated);
        })
});