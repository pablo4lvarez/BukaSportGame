const Router = require('koa-router');
const matches = require('./routes/matches');
const players = require('./routes/players');
// const register = require('./routes/register');
const crearpartida = require('./routes/crearpartida');
const auth_middle = require('./middleware/auth');
const auth = require('./routes/auth');
const protected = require('./routes/protected');
const jwt = require('koa-jwt');

const router = new Router();

router.use('/auth', auth.routes());

router.use('/matches', auth_middle, matches.routes());
router.use('/players', auth_middle, players.routes());
router.use('/crearpartida', auth_middle, crearpartida.routes());
// router.use('/register', register.routes());

router.use(jwt({secret:`${process.env.JWT_SECRET}`, key: 'tokendata' }));

router.use(protected.routes());

module.exports = router;
