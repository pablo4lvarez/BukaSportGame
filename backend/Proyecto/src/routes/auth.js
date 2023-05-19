const Router = require('koa-router');
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
const JWT = require('jsonwebtoken');

const router = new Router();




router.post('/login', async(ctx) => {
    try {
        console.log(ctx.request.body);
        const player = await ctx.orm.Player.findOne({
            where: {nickname: ctx.request.body.nickname},
            include: [
                {model: ctx.orm.Match, attributes: ['id']}
            ]
        })

        if (player) {
            if (bcrypt.compareSync(ctx.request.body.password, player.hash_contrasena)) {
                const new_session = await ctx.orm.Session.create({
                    userid: player.id
                });
                ctx.session.sessionid = new_session.id;
                ctx.session.userid = new_session.userid;

                const payload = {matches: player.Matches};
                const token = JWT.sign(payload, `${process.env.JWT_SECRET}`);

                ctx.response.body = {token: token};

                ctx.status = 201;
                
            } else {
                console.log("contraseña incorrecta");
                ctx.throw("Contraseña incorrecta", 401);
            }
        } else {
            console.log("mal nombre");
            ctx.throw("Usuario con ese nickname no existe", 404);
            
        }
    } catch (error) {
        ctx.throw(error);
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


router.post('players.create', '/signup', async (ctx) => {
    try {
        console.log(ctx.request.body);
        const puntos = 0;
        const player = await ctx.orm.Player.findOne({
            where: {nickname: ctx.request.body.nickname},
            include: [
                {model: ctx.orm.Match, attributes: ['id']}
            ]
        })
        if (!player) {
            const new_player = await ctx.orm.Player.findOne({
                where: {email: ctx.request.body.email},
                include: [
                    {model: ctx.orm.Match, attributes: ['id']}
                ]
            })
            if (!new_player) {
                if (CheckPassword(ctx.request.body.hash_contrasena)) {
                    const hash_contrasena = await bcrypt.hash(ctx.request.body.hash_contrasena, 5);
                    const player = await ctx.orm.Player.create({
                        nombre: ctx.request.body.nombre,
                        apellido: ctx.request.body.apellido,
                        nickname: ctx.request.body.nickname,
                        email: ctx.request.body.email,
                        hash_contrasena: hash_contrasena,
                        delegacion: ctx.request.body.delegacion,
                        puntos: puntos
                    });
                    ctx.status = 201;
                    ctx.body = player
                } 
                else {
                    ctx.throw("Password no cumple formato", 401);
                }
            }
            else {
                ctx.throw("Ya Existe un jugador con ese Email", 403);
            }
        }
        else {
            ctx.throw("Ya Existe un jugador con ese Nickname", 402);
        }
    } catch (error) {
        console.log(error);
        ctx.throw(error);
    }
});




router.post('/logout', async(ctx) => {

    try {
        await ctx.orm.Session.destroy({
            where: { id: `${ctx.session.sessionid}` }
        });
        ctx.session.sessionid = undefined;
        ctx.status = 200;
    } catch (error) {
        ctx.throw(error);
    }
});





module.exports = router;