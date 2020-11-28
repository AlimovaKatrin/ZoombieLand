module.exports.socketConfig = (server) => {
    console.log('connection')
    const io = require('socket.io')(server,{
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });
    io.on('connection', client => {
        client.send('Hello!');
        client.emit('hello', 'hola');
        client.on('disconnect', () => {
            console.log('disconnect')
        });
    });
}
