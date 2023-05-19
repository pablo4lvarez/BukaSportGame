const Koa = require('koa');
const koaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const cors = require('@koa/cors');
const router = require('./routes');
const orm = require('./models');
const session = require('koa-session');


// const PORT = 3000;

const app = new Koa();

// app.use(cors());
// app.use(cors(({ credentials: true })));

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// EXPOSE ORM TO KOA CONTEXT
app.context.orm = orm;

// Logs requests from the server
app.use(KoaLogger());

// Parse Request Body
app.use(koaBody());

app.keys = [`${process.env.APP_KEYS}`];

const CONFIG = {
    httpOnly: false,
}

app.use(session(CONFIG, app));

app.use(router.routes());



module.exports = app;
