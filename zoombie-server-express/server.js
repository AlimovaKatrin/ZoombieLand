const app = require('./app');
const {socketConfig} = require('./middlewares/socket-middleware');
const http = require('http');
const PORT = 4000;

const server = http.createServer(app);
socketConfig(server);
server.listen(PORT, () => {
    console.log('>>>>>>>>>>.', PORT)
});
