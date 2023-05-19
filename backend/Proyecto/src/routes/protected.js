const Router = require('koa-router');

const router = new Router();

router.delete('matches.delete', '/matches/:id_match', async (ctx) => {
    try {
        const matches = ctx.state.tokendata.matches;

        var found = false;

        matches.forEach(match => {
            if (match.id == ctx.params.id_match) {
                found = true;
            }
        });

        if (found) {
            await ctx.orm.Match.destroy({
                where: {id: `${ctx.params.id_match}`}
            });

            ctx.status = 202;
        } else {
            ctx.throw("No tienes permiso para eliminar esta partida", 401);
        }


    } catch (error) {
        ctx.throw(error);
    }


});









module.exports = router;