const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server, {
    cors : {
        origin : "http://localhost:3000/",
        methods : ["GET", "POST"]
    }
})

const QRCode = require('qrcode')

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
    console.log("Bağlantı kuruldu.");

    socket.on("qr", (msg) => {
        try {
            QRCode.toDataURL(msg, function (err, url) {
                socket.emit("setQR", url)
            })
        } catch (err) {
            console.log(err)
        }
    });
});

server.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

