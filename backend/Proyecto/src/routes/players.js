const Router = require('koa-router');
const bcrypt = require('bcrypt');
const router = new Router();
const { Player } = require('../models');

router.get('players.show', '/profile', async (ctx) => {
  try {
    const session = await ctx.orm.Session.findByPk(ctx.session.sessionid);
    const user = session.userid;
    const player = await ctx.orm.Player.findByPk(user, 
      {
        include: [
          { model: ctx.orm.Match },
        ],
      },
    );
    const player_stats =  await player.getPlayer_Stats();
    ctx.body = {
      player,
      player_stats
    } 
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});




function CheckPassword(password) {
  console.log(password);
  var correct_format = '^(?=.*[a-z])(?=.*[A-Z]).{8,}$'; //minimo largo 8 con al menos 1 mayuscula y 1 minuscula
  regex = RegExp(correct_format);
  if (regex.test(password)) {
      console.log("truee");
      return true;
  }
  else {
      console.log("falsee");
      return false;
  }
}



// se puede editar el nickname, el nombre, apellido y la contraseña

router.patch('players.update', '/profile/edit', async (ctx) => {
  try {
    console.log(ctx.request.body);
    
    const session = await ctx.orm.Session.findByPk(ctx.session.sessionid);
    const user = session.userid;
    const player = await ctx.orm.Player.findByPk(user, 
      {
        include: [
          { model: ctx.orm.Match },
        ],
      },
    );
    
    if (ctx.request.body.nickname != "") { // ver si existe algun usuario con ese nickname...
      const check_player = await ctx.orm.Player.findOne({
        where: {nickname: ctx.request.body.nickname},
        include: [
            {model: ctx.orm.Match, attributes: ['id']}
        ]
      })
      if (!check_player) {
        console.log("update de nickname!");
        const new_nickname = ctx.request.body.nickname;
        ctx.status = 201;
        ctx.body = player;
        await player.update({nickname: new_nickname});
      }
      else {
        ctx.throw("Ya existe un usuario con ese Nickname", 400);
      }
    }


    if (ctx.request.body.nombre != "") {
      console.log("update de nombre!");
      const new_name = ctx.request.body.nombre;
      ctx.status = 201;
      ctx.body = player;
      await player.update({ nombre: new_name });
    }

    if (ctx.request.body.apellido != "") {
      console.log("update de apellido!");
      const new_apellido = ctx.request.body.apellido;
      ctx.status = 201;
      ctx.body = player;
      await player.update({ apellido: new_apellido });
    }


    if (ctx.request.body.password != "") {
      if (CheckPassword(ctx.request.body.password)) {
        console.log("update de password!");
        const hashed_new_password = await bcrypt.hash(ctx.request.body.password, 5);
        ctx.status = 201;
        ctx.body = player;
        await player.update({hash_contrasena: hashed_new_password});
      } 
      else {
          ctx.throw("Password no cumple formato", 402);
      }
    }
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});





module.exports = router;
