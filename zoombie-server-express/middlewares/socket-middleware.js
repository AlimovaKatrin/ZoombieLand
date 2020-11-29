module.exports.socketConfig = (server) => {
    console.log('connection')
    const io = require('socket.io')(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', client => {
        client.on('initUser', (user) => {
            console.log(user)
        })
        client.on('disconnect', () => {
            console.log('disconnect')
        });
    });
}
