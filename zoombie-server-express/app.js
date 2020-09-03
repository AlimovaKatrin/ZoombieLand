const express = require('express');
const http = require('http');
const session = require('express-session');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const FileStore = require('session-file-store')(session);
const app = express();

const creators = [{
    name: 'Zombie The Zombie',
    phone: '8999000666',
    status: 'Brain Eater'
},
    {
        name: 'Zombita Bombita',
        phone: '8777000555',
        status: 'Brain Developer'
    }

];
const users = [{
    name: 'Franckenshtein',
    nikName: 'Fran',
    password: '123',
    hobby: 'I love brains and flowers,' +
        'romantic guy'
}, {
    name: 'Gomez Addams',
    nikName: 'GozAdd',
    password: '123',
    hobby: 'Playing with model trains and blowing them up. Spending time with family.'
},
    {
        name: 'Morticia Addams',
        nikName: 'MorAdd',
        password: '123',
        hobby: `Feeding Cleopatra.
            Cutting buds off of roses.
            Spending time with family.`
    },
    {
        name: 'Hand Addams',
        nikName: 'HandyHand',
        password: '123',
        hobby: 'Help everybody. Spend time with Addams family'
    },
    {
        name: 'Katrin Ne Zombie',
        nikName: 'alimova.katrin',
        password: '123',
        hobby: 'make brains work'
    }]
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(session({
    name: 'user_sid',
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 9000000
    }
}));

app.get('/info', (req, res) => {
    res.json({
        creators,
        users: users.length
    })
});

app.get('/user', (req, res) => {
    res.json({
        users
    })
});

app.post('/login', (req, res) => {
    const {loginName, loginPassword} = req.body;
    const current = users.find(el => el.nikName === loginName && el.password === loginPassword);
    if (current) {
        req.session.currentUser = current;
        res.json({
            current
        })
    }else{
        res.status(404);
        res.end();
    }
});

app.get('/logout', (req, res) => {
   req.session.destroy();
    res.clearCookie('user_sid');
   res.status(200);
   res.end();
});
const server = http.createServer(app);
server.listen(process.env.PORT);