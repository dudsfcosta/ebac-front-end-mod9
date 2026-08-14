// Seleciona a ul com a lista de tarefas no HTML
const tarefas = document.getElementById("listaTarefas");

fetch("https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaTarefas")
    // converte o corpo da resposta em json
.then(resposta => resposta.json())
.then((listaDeTarefas) => {
    
    // itera sobre caa tarefa do array
    listaDeTarefas.forEach(tarefa => {
        
        // elemento de lista <li> para cada tarefa
        const item = document.createElement("li");
        // define o conteúdo HTML com descrição e botão
        item.innerHTML = `${tarefa.tarefa} <button class="delete" id="${tarefa._id}">X</button>`;

        // adiciona o id da tarefa no li
        item.dataset.id = tarefa._id;
        item.querySelector(".delete").addEventListener("click", () => {

            fetch(`https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaTarefas/${tarefa._id}`, {
                method: "DELETE"
            }).then(() => {

                item.remove();
            })
        });
        // adiciona o item à lista de tarefas
        console.log(item);
        tarefas.appendChild(item);
    });
});

// EventListener para o botão "adicionar"
document.getElementById("add").addEventListener("click", ()=> {

    // Pega a descrição que o usuário adicionou com o id tarefa
    const tarefa = document.getElementById("tarefa").value;
    // Faz requisição POST para a API externa criar a tarefa
    fetch("https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaTarefas", {

        // Definido como POST, mas pode variar entre GET, POST, PUT, DELETE
        method: "POST",
        // Define o cabeçalho da requisição como tipo do conteúdo JSON
        headers: {

            "Content-Type": "application/json"
        },
        // converte um objeto JS para uma string JSON e passa no corpo da requisição
        body: JSON.stringify({tarefa: tarefa})
    })
        .then(resposta => resposta.json())
        .then((tarefa) => {

            // elemento de lista <li> para cada tarefa
            const itemCreated = document.createElement("li");

            // define o conteúdo HTML com descrição e botão
            itemCreated.innerHTML = `${tarefa.tarefa} <button class="delete" id="${tarefa._id}">X</button>`;

            // adiciona o id da tarefa no li
            itemCreated.dataset.id = tarefa._id;
            itemCreated.querySelector(".delete").addEventListener("click", () => {

                fetch(`https://crudcrud.com/api/c39fc8e3f08f4454845c84ce6ba70999/listaTarefas/${tarefa._id}`, {
                    method: "DELETE"
                }).then(() => {

                    itemCreated.remove();
                })
            });
            // adiciona o item à lista de tarefas
            tarefas.appendChild(itemCreated);
        })
});