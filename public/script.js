// Variables

let img = document.getElementById("qrimg")

let submit = document.getElementById("sub1")
let textbox = document.getElementById("textbox")

// SocketIO : socket

const socket = io("http://localhost:3000/");

// Events

submit.addEventListener("click", () => {
    socket.emit("qr", textbox.value)
})

// SocketIO : Connect server & Listener

socket.on("connect", () => {
    console.log("bağlantı kuruldu.");
});

socket.on("setQR", (QRCODE) => {
    img.src = QRCODE
})