const socket = io("http://localhost:3000/"); 
console.log("client başladı.");

let img = document.getElementById("qrimg")

let submit = document.getElementById("sub1")
let textbox = document.getElementById("textbox")

submit.addEventListener("click", () => {
    socket.emit("qr", textbox.value)
})

socket.on("connect", () => {
    console.log("bağlantı kuruldu.");
});

socket.on("setQR", (QRCODE) => {
    img.src = QRCODE
})