const { Socket } = require('dgram');
const express = require('express')
const app = express()
const http = require('http')

const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => { 
    console.log('Connected',socket.id)
    socket.on('disconnect',(payload) =>{
        console.log('Disconnected',socket.id)
    })
    socket.on('clientevent', (payload) => {
        console.log(payload)
        io.emit('serverevent',payload)
    })
});

app.get('/', (req,res) => {
    // res.status(200).json({
    //     msg:"ok"
    // })
    res.sendFile(__dirname+'/index.html')
})

let port = 3000;

server.listen(port,(req,res) => {
    console.log("port is running on", port)
})