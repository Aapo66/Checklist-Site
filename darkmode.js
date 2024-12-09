const trilho = document.getElementById('trilho');
const body = document.querySelector('body');
const lixeiraImg = document.getElementById('lixeira-img'); // Referência para a imagem da lixeira

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');

    // Mudar a imagem da lixeira com base no modo
    if (body.classList.contains('dark')) {
        // Quando o Dark Mode é ativado, mudar para a imagem escura
        lixeiraImg.src = "imagens//lixeira modelo (1) (1).png";
    } else {
        // Quando o Dark Mode é desativado, voltar para a imagem clara
        lixeiraImg.src = "imagens/lixeira modelo (2).png";
    }
});
