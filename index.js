const express = require('express')
const app = express()
const io = require('socket.io')(801)
var password = '123456'

app.use(express.static('public'))
app.listen((process.env.PORT || 80), function(){
    console.log('80 Portu dinleniyor...')
})

io.on('connection', function(socket){
    socket.on('disconnect', function(){
        console.log("A user disconnected")
    })
    socket.on("notification",function(json){
        if(json.password === password){
            json.password="";
            io.emit("notification",json);
        }
    })
})