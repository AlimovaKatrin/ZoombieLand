
module.exports.socketConfig = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    });
    const userList = new Set();
    io.on('connection', client => {
        client.emit('userConnected', Array.from(userList))
        client.on('initUser', (user) => {
            userList.add(user.email)
            client.broadcast.emit('userConnected', Array.from(userList))
            console.log(userList)
        })
        client.on('disconnectUser', (email) => {
            userList.delete(email);
            client.broadcast.emit('userConnected', Array.from(userList))
        })
        client.on('disconnect', () => {
            console.log('disconnect')
        });
    });
}
