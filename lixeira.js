document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".container-checklist");
    const lixeira = document.querySelector(".lixeira");

    // Monitorar a lixeira para quando uma bolha for arrastada até ela
    lixeira.addEventListener('dragover', function (event) {
        event.preventDefault(); // Permitir que o item seja arrastado
        lixeira.style.opacity = '0.7';  // Diminui a opacidade da lixeira para indicar que pode ser solto ali
    });

    lixeira.addEventListener('dragleave', function (event) {
        lixeira.style.opacity = '1';  // Restaura a opacidade quando o item sai da área da lixeira
    });

    lixeira.addEventListener('drop', function (event) {
        event.preventDefault();

        // Pega a bolha arrastada
        const draggedBubble = document.querySelector('.dragging');

        if (draggedBubble) {
            // Exibe o prompt para confirmar a exclusão
            const confirmDelete = true
            if (confirmDelete) {
                draggedBubble.remove();  // Remove a bolha
            }
        }

        // Restaura a opacidade da lixeira
        lixeira.style.opacity = '1';
    });

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes') {
                if (container.classList.contains('show')) {
                    // Se a classe 'show' estiver presente, a lixeira deve aparecer gradualmente
                    lixeira.style.visibility = 'visible';  // Torna visível
                    lixeira.style.opacity = '1';            // Torna a lixeira opaca (visível)
                    lixeira.style.transition = 'opacity 0.5s ease-in-out, visibility 0s'; // Aplica a transição
                } else {
                    // Se a classe 'show' não estiver presente, a lixeira desaparece gradualmente
                    lixeira.style.visibility = 'hidden';  // Impede interação
                    
                }
            }
        });
    });

    // Monitora mudanças nas classes do container
    observer.observe(container, { attributes: true, attributeFilter: ['class'] });
});
