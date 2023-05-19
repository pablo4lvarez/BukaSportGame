// const { faker } = require('@faker-js/faker');

// const randomName = faker.name.fullName();

// console.log("hola que wea", randomName, "yapo")


const Koa = require('koa');
const koaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const router = require('./routes');
const cors = require('@koa/cors');

const PORT = 3000;

const app = new Koa();

// Logs requests from the server
app.use(KoaLogger());

// Parse Request Body
app.use(koaBody());

// app.use((ctx, next) => {
//     ctx.body = "Hello MOTHERFUCKER DCC!";
//   })

app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Starting app in port ${PORT}`);
  });
