console.log('mostrar console', document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = window.document.querySelector(".botao-trailer")
var botaoFecharModal = window.document.querySelector(".fechar-modal")
var modal = window.document.querySelector(".modal")
var video = window.document.getElementById("video") //precisa arrumar o jeito que o video aparece na modal
var linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})

