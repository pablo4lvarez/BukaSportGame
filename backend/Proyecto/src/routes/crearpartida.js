const Router = require('koa-router');

const router = new Router();
const { Match } = require('../models');
const {Casilla_Deporte} = require('../models');

router.get('crearpartida.show', '/', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findAll();
    const session = await ctx.session.sessionid;
    // const player1 = await match.getPlayer1();
    // const player2 = await match.getPlayer2();
    // const player3 = await match.getPlayer3();
    // const currentPlayer = await match.getCurrentPlayer();
    // const tableroID = await match.getTableroID();
    

    ctx.body = {
      match,
      session,
    };

  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

module.exports = router;