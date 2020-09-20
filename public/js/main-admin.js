var socket = io("http://localhost:801");
var json = {title:"", options:{}, password:""};

    $('form').submit(function(event){
        event.preventDefault();
        json.title = $('#title').val();
        json.password = $('#password').val();
        json.options.body = $('#message').val();
        json.options.icon = $('#icon').val();
        json.options.timestamp = Date.now();
        socket.emit("notification", json);
        return false;
    })