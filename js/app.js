const qrCodeForm = document.querySelector("#text");
const btnGerar = document.querySelector("#btn-gerar");
const container = document.querySelector("#container");
const qrCodeImg = document.querySelector("#qrcode");

function gerarQrCode() {
    const qrCodeInputValue = qrCodeForm.value;

    if (!qrCodeInputValue) return;
    btnGerar.innerText = "Gerando o codigo...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active)")
        btnGerar.innerText = "Codigo Gerado"
    })
}



btnGerar.addEventListener("click", () => {
    gerarQrCode();
})