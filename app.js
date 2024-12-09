// Destacar o botão na navbar
const menuItem = document.querySelectorAll(".item-menu")


function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove("ativo"));
        this.classList.add("ativo");
}

menuItem.forEach((item)=>
    item.addEventListener("click", selectLink)
)


// Expandir e retrair a barra lateral
const btnExp = document.querySelector("#btn-exp");
const menuSide = document.querySelector(".menu-lateral");
const containerCorpo = document.querySelector(".container-corpo");
const sections = document.querySelectorAll(".corpo");

btnExp.addEventListener("click", function() {
    menuSide.classList.toggle("expandir");

    // Ajusta a margem do conteúdo conforme o estado da barra lateral
    if (menuSide.classList.contains("expandir")) {
        containerCorpo.style.marginLeft = "300px"; // Define a margem quando a barra está expandida
    } else {
        containerCorpo.style.marginLeft = "80px"; // Define a margem quando a barra está retraída
    }
});

// Função para mostrar a seção com animação
function showSection(sectionId) {
    const section = document.getElementById(sectionId);

    section.style.display = "flex"; // Garante que a seção esteja visível
    section.classList.add("fade-in-down"); // Aplica a animação de entrada para todas as seções

    // Adiciona a classe 'show' nas colunas de checklist com o tempo necessário para as animações
    if (sectionId === "checklist") {
        const checklistContainer = section.querySelector(".container-checklist");
        checklistContainer.classList.add("show");

        const columns = checklistContainer.querySelectorAll("div");
        columns.forEach((column, index) => {
            setTimeout(() => {
                column.classList.add("show"); // Faz as colunas aparecerem com a animação
            }, 200 * (index + 1)); // Atraso para cada coluna
        });
    }

    setTimeout(() => {
        section.classList.remove("fade-in-down"); // Remove a animação após a execução
    }, 600); // Espera a animação de entrada terminar
}

// Função para esconder todas as seções com animação
function hideSections() {
    sections.forEach(section => {
        section.classList.add("fade-out-up"); // Aplica a animação de saída

        // Aguardar a animação terminar antes de esconder a seção
        setTimeout(() => {
            section.style.display = "none"; // Usa display: none para esconder completamente
            section.classList.remove("fade-out-up"); // Remove a animação de saída
            // Se for a seção de checklist, remove a classe show para reiniciar a animação
            if (section.id === "checklist") {
                const containerChecklist = section.querySelector(".container-checklist");
                containerChecklist.classList.remove("show");
            }
        }, 200); // Espera a animação de 600ms terminar
    });
}

// Inicializa a navegação entre as seções
window.addEventListener("load", function () {
    showSection("home"); // Exibe a Home quando o site for carregado
});

// Eventos de clique para navegação
document.querySelector(".item-menu:nth-child(1) a").addEventListener("click", function (event) {
    event.preventDefault();
    hideSections();
    setTimeout(() => showSection("home"), 600); // Garante que a seção seja mostrada após hideSections
});

document.querySelector(".item-menu:nth-child(2) a").addEventListener("click", function (event) {
    event.preventDefault();
    hideSections();
    setTimeout(() => showSection("checklist"), 600); // Garante que a seção seja mostrada após hideSections
});

document.querySelector(".botao-check a").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    hideSections(); // Esconde todas as seções
    setTimeout(() => showSection("checklist"), 600); // Exibe a seção "checklist" após o tempo de transição

    // Adiciona a classe ao elemento desejado
    const checkItem = document.querySelector(".item-menu:nth-child(2)"); // Substitua '.seu-elemento' pelo seletor do elemento que você quer modificar
    if (checkItem) {
        checkItem.classList.add("ativo"); // Substitua 'sua-classe' pelo nome da classe que você deseja adicionar
    }

    // Remove a classe de outro elemento
    const homeItem = document.querySelector(".item-menu:nth-child(1)"); // Substitua '.outro-elemento' pelo seletor do outro elemento
    if (homeItem) {
        homeItem.classList.remove("ativo"); // Substitua 'classe-a-remover' pelo nome da classe que você deseja remover
    }
});



document.querySelector(".item-menu:nth-child(3) a").addEventListener("click", function (event) {
    event.preventDefault();
    hideSections();
    setTimeout(() => showSection("contacts"), 600); // Garante que a seção seja mostrada após hideSections
});

