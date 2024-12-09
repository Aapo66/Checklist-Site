// Selecionar todas as áreas de entrada (onde o usuário vai digitar)
const taskInputs = document.querySelectorAll('.task-input');

// Função para adicionar tarefa
taskInputs.forEach(input => {
    // Adicionar evento de clique na coluna
    input.closest('.coluna').addEventListener('click', () => {
        // Remover o texto inicial quando o usuário clicar em qualquer lugar dentro da coluna
        if (input.textContent === "Escreva uma tarefa!") {
            input.textContent = '';
            input.style.color = "#000"; // Colocar o texto em preto
        }
    });

    // Adicionar tarefa ao pressionar Enter
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && input.textContent.trim() !== "") {
            event.preventDefault(); // Impede o Enter de adicionar uma nova linha
            const taskText = input.textContent.trim(); // Pega o texto da tarefa

            // Cria a bolha de tarefa
            const taskBubble = document.createElement('div');
            taskBubble.textContent = taskText;

            // Define a cor da bolha dependendo da coluna
            if (input.closest('#todo')) {
                taskBubble.style.backgroundColor = "#ba3030";
            } else if (input.closest('#in-progress')) {
                taskBubble.style.backgroundColor = "#fff25c";
            } else if (input.closest('#done')) {
                taskBubble.style.backgroundColor = "#188300";
            }

            // Estilo para a bolha de tarefa
            taskBubble.style.color = "white";
            taskBubble.style.padding = "10px";
            taskBubble.style.marginBottom = "10px";
            taskBubble.style.borderRadius = "5px";
            taskBubble.style.cursor = "pointer";
            taskBubble.setAttribute('draggable', 'true'); // Tornar a bolha arrastável

            // Função para confirmar a exclusão com clique direito
            taskBubble.addEventListener('contextmenu', (event) => {
                event.preventDefault(); // Previne o menu padrão do botão direito

                const confirmDelete = confirm("Deseja excluir essa tarefa?");
                if (confirmDelete) {
                    taskBubble.remove(); // Remove a bolha
                }
            });

            // Adiciona a bolha à coluna
            input.closest('.coluna').appendChild(taskBubble);

            // Limpa a área de entrada após adicionar a tarefa
            input.textContent = ''; // Deixa o campo vazio, pronto para a próxima tarefa
            input.style.color = "#000"; // Define a cor como preto, indicando que o usuário pode continuar digitando

        }
    });

    // Prevenir o "Descreva uma tarefa!" de ser editado
    input.addEventListener('blur', () => {
        if (input.textContent === '') {
            input.textContent = "Escreva uma tarefa!";
            input.style.color = "#aaa"; // Voltar ao estado inicial
        }
    });
});

// Função para permitir que a bolha seja arrastada para outra coluna
document.querySelectorAll('.coluna').forEach(coluna => {
    coluna.addEventListener('dragover', (event) => {
        event.preventDefault(); // Permite que o item seja arrastado
    });

    coluna.addEventListener('dragenter', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do browser
    });

    coluna.addEventListener('drop', (event) => {
        event.preventDefault(); // Impede a ação padrão

        // Pega o item arrastado
        const draggedBubble = document.querySelector('.dragging');
        const dropColumn = event.target.closest('.coluna');

        // Verifica se é realmente uma bolha e se há uma coluna de destino
        if (draggedBubble && dropColumn) {
            dropColumn.appendChild(draggedBubble);

            // Atualiza a cor da bolha dependendo da nova coluna
            if (dropColumn.id === 'todo') {
                draggedBubble.style.backgroundColor = '#ba3030';
            } else if (dropColumn.id === 'in-progress') {
                draggedBubble.style.backgroundColor = '#fff25c';
            } else if (dropColumn.id === 'done') {
                draggedBubble.style.backgroundColor = '#188300';
            }
        }
    });
});

// Marcar a bolha como "arrastada" quando começa o drag
document.addEventListener('dragstart', (event) => {
    if (event.target && event.target.getAttribute('draggable') === 'true') {
        event.target.classList.add('dragging');
    }
});

// Remover a marcação de "arrastada" quando termina o drag
document.addEventListener('dragend', (event) => {
    if (event.target && event.target.classList.contains('dragging')) {
        event.target.classList.remove('dragging');
    }
});

// Marcar a bolha como "arrastada" quando começa o drag
document.addEventListener('dragstart', (event) => {
    if (event.target && event.target.getAttribute('draggable') === 'true') {
        event.target.classList.add('dragging'); // Marca a bolha como "arrastada"
    }
});

// Remover a marcação de "arrastada" quando termina o drag
document.addEventListener('dragend', (event) => {
    if (event.target && event.target.classList.contains('dragging')) {
        event.target.classList.remove('dragging'); // Remove a marcação de "arrastada"
    }

});

