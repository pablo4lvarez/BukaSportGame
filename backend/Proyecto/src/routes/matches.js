const Router = require('koa-router');

const router = new Router();
const { Match } = require('../models');
const {Casilla_Deporte} = require('../models');

router.get('matches.show', '/', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const tableroID = await match.getTableroID();
    const playerStats = await currentPlayer.getPlayer_Stats();

    ctx.body = {
      match,
      player1,
      player2,
      player3,
      currentPlayer,
      tableroID,
      playerStats,
    };
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.get('infocompetencia.show', '/infocompetencia', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const tableroID = await match.getTableroID();
    const playerStats = await currentPlayer.getPlayer_Stats();

    if (currentPlayer.id === player1.id) {
      const pos1 = match.position_1;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos1);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    }

    else if (currentPlayer.id === player2.id) {
      const pos2 = match.position_2;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos2);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    } else if (currentPlayer.id === player3.id) {
      const pos3 = match.position_3;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos3);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    }
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});


router.get('versus.show', '/infoversus', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const tableroID = await match.getTableroID();
    const playerStats = await currentPlayer.getPlayer_Stats();

    if (currentPlayer.id === player1.id) {
      const pos1 = match.position_1;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos1);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    }

    else if (currentPlayer.id === player2.id) {
      const pos2 = match.position_2;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos2);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    } else if (currentPlayer.id === player3.id) {
      const pos3 = match.position_3;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos3);
      ctx.body = {
        match,
        player1,
        player2,
        player3,
        currentPlayer,
        tableroID,
        deporte,
        playerStats,
      };
    }
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});


router.post('/terminarturno', async (ctx) => {

  try {
    const match = await ctx.orm.Match.findOne();
    // const match = await ctx.orm.Match.findByPk(match_id);
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();

    if (player1.id === currentPlayer.id) {
      const posActual = match.position_1;
      await match.update({ pos1_anterior: posActual});
      await match.update({ current_player: player2.id });
      console.log(match.pos1_anterior, match.position_1);
    } else if (player2.id === currentPlayer.id) {
      const posActual = match.position_2;
      await match.update({ pos2_anterior: posActual});
      await match.update({ current_player: player3.id });
    } else if (player3.id === currentPlayer.id) {
      const posActual = match.position_3;
      await match.update({ pos3_anterior: posActual});
      await match.update({ current_player: player1.id });
    }

    const actTurnos = match.turnos + 1;

    await match.update({ turnos: actTurnos });

    ctx.body = {
      match,
      player1,
      player2,
      player3,
      currentPlayer,
    };
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.post('/lanzardado', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    // const match = await ctx.orm.Match.findByPk(match_id);
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();

    var dado = (Math.floor(Math.random() * 3) + 1)

    if (player1.id === currentPlayer.id) {
      const posAnterior = match.position_1;
      if (dado === 3 && (match.position_1 === 4 || match.position_1 === 5)) {
        // await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 6 });
      } else if (dado === 2 && match.position_1 === 5) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 6 });
      } else if (dado === 3 && (match.position_1 === 10 || match.position_1 === 11)) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 12 });
      } else if (dado === 2 && match.position_1 === 11) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 12 });
      } else if (dado === 3 && (match.position_1 === 16 || match.position_1 === 17)) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 18 });
      } else if (dado === 2 && match.position_1 === 17) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 18 });
      } else if (dado === 3 && (match.position_1 === 22 || match.position_1 === 23)) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 24 });
      } else if (dado === 2 && match.position_1 === 23) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 24 });
      } else if (dado === 3 && (match.position_1 === 28 || match.position_1 === 29)) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 30 });
      } else if (dado === 2 && match.position_1 === 29) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 30 });
      } else if (dado === 3 && (match.position_1 === 34 || match.position_1 === 35)) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 36 });
      } else if (dado === 2 && match.position_1 === 35) {
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: 36 });
      } else {
        const new_pos = parseInt(match.position_1) + dado;
        await match.update({ pos1_anterior: posAnterior});
        await match.update({ position_1: new_pos});
      }
    }
    else if (player2.id === currentPlayer.id) {
      const posAnterior = match.position_2;
      if (dado === 3 && (match.position_2 === 4 || match.position_2 === 5)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 6 });
      } else if (dado === 2 && match.position_2 === 5) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 6 });
      } else if (dado === 3 && (match.position_2 === 10 || match.position_2 === 11)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 12 });
      } else if (dado === 2 && match.position_2 === 11) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 12 });
      } else if (dado === 3 && (match.position_2 === 16 || match.position_2 === 17)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 18 });
      } else if (dado === 2 && match.position_2 === 17) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 18 });
      } else if (dado === 3 && (match.position_2 === 22 || match.position_2 === 23)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 24 });
      } else if (dado === 2 && match.position_2 === 23) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 24 });
      } else if (dado === 3 && (match.position_2 === 28 || match.position_2 === 29)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 30 });
      } else if (dado === 2 && match.position_2 === 29) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 30 });
      } else if (dado === 3 && (match.position_2 === 34 || match.position_2 === 35)) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 36 });
      } else if (dado === 2 && match.position_2 === 35) {
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: 36 });
      } else {
        const new_pos = parseInt(match.position_2) + dado;
        await match.update({ pos2_anterior: posAnterior});
        await match.update({ position_2: new_pos});
      }
    }
    else if (player3.id === currentPlayer.id) {
      const posAnterior = match.position_3;
      if (dado === 3 && (match.position_3 === 4 || match.position_3 === 5)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 6 });
      } else if (dado === 2 && match.position_3 === 5) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 6 });
      } else if (dado === 3 && (match.position_3 === 10 || match.position_3 === 11)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 12 });
      } else if (dado === 2 && match.position_3 === 11) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 12 });
      } else if (dado === 3 && (match.position_3 === 16 || match.position_3 === 17)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 18 });
      } else if (dado === 2 && match.position_3 === 17) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 18 });
      } else if (dado === 3 && (match.position_3 === 22 || match.position_3 === 23)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 24 });
      } else if (dado === 2 && match.position_3 === 23) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 24 });
      } else if (dado === 3 && (match.position_3 === 28 || match.position_3 === 29)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 30 });
      } else if (dado === 2 && match.position_3 === 29) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 30 });
      } else if (dado === 3 && (match.position_3 === 34 || match.position_3 === 35)) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 36 });
      } else if (dado === 2 && match.position_3 === 35) {
        await match.update({ pos3_anterior: posAnterior});
        await match.update({ position_3: 36 });
      } else {
        const new_pos = parseInt(match.position_3) + dado;
        await match.update({ position_3: new_pos});
      }
    }
    ctx.body = {
      dado,
      match,
    };
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.post('/sacarcarta', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    // const match = await ctx.orm.Match.findByPk(match_id);
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const playerStats = await currentPlayer.getPlayer_Stats();
    const carta = (Math.floor(Math.random() * 4) + 1)

    console.log(playerStats)

    if (player1.id === currentPlayer.id) {
      if (carta === 1) {
        // alert(`h${player1.nickname} has incrito mal a un atleta, retrocedes dos posiciones como sanción`)
        const new_pos = parseInt(match.position_1) - 2;
        await match.update({ position_1: new_pos});
      }
      else if (carta === 2) {
        // alert(`h${player1.nickname} se premia a tu federacion por su buena conducta en años anteriores, avanzas una posiciones`)
        const new_pos = parseInt(match.position_1) + 1;
        await match.update({ position_1: new_pos});
      }
      else if (carta === 3) {
        // alert(`h${player1.nickname} tus atletas estan en su mejor momento en el gimnasio, ganas 3 puntos de Fuerza`)
        console.log(`Tengo esto antes ${playerStats.fuerza}`)
        const new_stat = parseInt(playerStats.fuerza) + 3;
        await playerStats.update({ fuerza : new_stat });
        console.log(`Tengo esto despues ${playerStats.fuerza}`)
      }
      else if (carta === 4) {
        // alert(`h${player1.nickname} tus atletas se fueron de fiesta y se encuentran cansados, pierdes 2 puntos de Resistencia`)
        const new_stat = parseInt(playerStats.resistencia) - 2;
        await playerStats.update({ resistencia : new_stat });
      }
    }
    else if (player2.id === currentPlayer.id) {
      if (carta === 1) {
        // alert(`h${player1.nickname} has incrito mal a un atleta, retrocedes dos posiciones como sanción`)
        const new_pos = parseInt(match.position_2) - 2;
        await match.update({ position_2: new_pos});
      }
      else if (carta === 2) {
        // alert(`h${player1.nickname} se premia a tu federacion por su buena conducta en años anteriores, avanzas una posiciones`)
        const new_pos = parseInt(match.position_2) + 1;
        await match.update({ position_2: new_pos});
      }
      else if (carta === 3) {
        // alert(`h${player1.nickname} tus atletas estan en su mejor momento en el gimnasio, ganas 3 puntos de Fuerza`)
        const new_stat = parseInt(playerStats.fuerza) + 3;
        await playerStats.update({ fuerza : new_stat });
      }
      else if (carta === 4) {
        // alert(`h${player1.nickname} tus atletas se fueron de fiesta y se encuentran cansados, pierdes 2 puntos de Resistencia`)
        const new_stat = parseInt(playerStats.resistencia) - 2;
        await playerStats.update({ resistencia : new_stat });
      }
    }
    else if (player3.id === currentPlayer.id) {
      if (carta === 1) {
        // alert(`h${player1.nickname} has incrito mal a un atleta, retrocedes dos posiciones como sanción`)
        const new_pos = parseInt(match.position_3) - 2;
        await match.update({ position_3: new_pos});
      }
      else if (carta === 2) {
        // alert(`h${player1.nickname} se premia a tu federacion por su buena conducta en años anteriores, avanzas una posiciones`)
        const new_pos = parseInt(match.position_3) + 1;
        await match.update({ position_3: new_pos});
      }
      else if (carta === 3) {
        // alert(`h${player1.nickname} tus atletas estan en su mejor momento en el gimnasio, ganas 3 puntos de Fuerza`)
        const new_stat = parseInt(playerStats.fuerza) + 3;
        await playerStats.update({ fuerza : new_stat });
      }
      else if (carta === 4) {
        // alert(`h${player1.nickname} tus atletas se fueron de fiesta y se encuentran cansados, pierdes 2 puntos de Resistencia`)
        const new_stat = parseInt(playerStats.resistencia) - 2;
        await playerStats.update({ resistencia : new_stat });
      }
    }
    ctx.body = {
      match,
      carta,
    };
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.post('/lanzardadocompetencia', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const playerStats = await currentPlayer.getPlayer_Stats();
    const fuerza = playerStats.fuerza;
    const velocidad = playerStats.velocidad;
    const resistencia = playerStats.resistencia;
    const coordinacion = playerStats.coordinacion;
    const inteligencia = playerStats.inteligencia;
    const equilibrio = playerStats.equilibrio;

    const dado = (Math.floor(Math.random() * 6) + 1);

    if (currentPlayer.id === player1.id) {
      const pos1 = match.position_1;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos1);
      var puntos = 0;
      if (deporte.fuerza) {
        puntos = puntos + (fuerza * dado) 
      }
      if (deporte.velocidad) {
        puntos = puntos + (velocidad * dado) 
      }
      if (deporte.resistencia) {
        puntos = puntos + (resistencia * dado) 
      }
      if (deporte.inteligencia) {
        puntos = puntos + (inteligencia * dado) 
      }
      if (deporte.coordinacion) {
        puntos = puntos + (coordinacion * dado) 
      }
      if (deporte.equilibrio) {
        puntos = puntos + (equilibrio * dado) 
      }

      await playerStats.update({ puntos_competencia: puntos });

      ctx.body = {
        dado,
        match,
        player1,
        deporte,
        playerStats,
      };
    } else if (currentPlayer.id === player2.id) {
      const pos2 = match.position_2;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos2);
      var puntos = 0;
      if (deporte.fuerza) {
        puntos = puntos + (fuerza * dado) 
      }
      if (deporte.velocidad) {
        puntos = puntos + (velocidad * dado) 
      }
      if (deporte.resistencia) {
        puntos = puntos + (resistencia * dado) 
      }
      if (deporte.inteligencia) {
        puntos = puntos + (inteligencia * dado) 
      }
      if (deporte.coordinacion) {
        puntos = puntos + (coordinacion * dado) 
      }
      if (deporte.equilibrio) {
        puntos = puntos + (equilibrio * dado) 
      }

      await playerStats.update({ puntos_competencia: puntos });

      ctx.body = {
        dado,
        match,
        player1,
        deporte,
        playerStats,
      };
    } else if (currentPlayer.id === player3.id) {
      const pos3 = match.position_3;
      const deporte = await ctx.orm.Casilla_Deporte.findByPk(pos3);
      var puntos = 0;
      if (deporte.fuerza) {
        puntos += (fuerza * dado);
      }
      if (deporte.velocidad) {
        puntos = puntos + (velocidad * dado) 
      }
      if (deporte.resistencia) {
        puntos = puntos + (resistencia * dado) 
      }
      if (deporte.inteligencia) {
        puntos = puntos + (inteligencia * dado) 
      }
      if (deporte.coordinacion) {
        puntos = puntos + (coordinacion * dado) 
      }
      if (deporte.equilibrio) {
        puntos = puntos + (equilibrio * dado) 
      }

      await playerStats.update({ puntos_competencia: puntos });

      ctx.body = {
        dado,
        match,
        player1,
        deporte,
        playerStats,
      };
    }
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

router.get('/lanzardadoversus', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();
    const playerStats = await currentPlayer.getPlayer_Stats();
    const player1Stats = await player1.getPlayer_Stats();
    const player2Stats = await player2.getPlayer_Stats();
    const player3Stats = await player3.getPlayer_Stats();
    const fuerza = playerStats.fuerza;
    const velocidad = playerStats.velocidad;
    const resistencia = playerStats.resistencia;
    const coordinacion = playerStats.coordinacion;
    const inteligencia = playerStats.inteligencia;
    const equilibrio = playerStats.equilibrio;

    // const dado = (Math.floor(Math.random() * 6) + 1);

    const sumap1 = player1Stats.fuerza +  player1Stats.velocidad + player1Stats.resistencia + player1Stats.coordinacion + player1Stats.inteligencia + player1Stats.equilibrio
    const sumap2 = player2Stats.fuerza +  player2Stats.velocidad + player2Stats.resistencia + player2Stats.coordinacion + player2Stats.inteligencia + player2Stats.equilibrio
    const sumap3 = player3Stats.fuerza +  player3Stats.velocidad + player3Stats.resistencia + player3Stats.coordinacion + player3Stats.inteligencia + player3Stats.equilibrio

    if (currentPlayer.id === player1.id) {
      if (sumap1 > sumap2){
        const resultado = 'local'
        const new_pos = parseInt(match.position_1) + 1;
        await match.update({ position_1: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap1 < sumap2){
        const resultado = 'visita'
        const new_pos = parseInt(match.position_1) - 1;
        await match.update({ position_1: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap1 === sumap2){
        const resultado = 'empate'
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }



    } else if (currentPlayer.id === player2.id) {
      if (sumap2 > sumap3){
        const resultado = 'local'
        const new_pos = parseInt(match.position_2) + 1;
        await match.update({ position_2: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap2 < sumap3){
        const resultado = 'visita'
        const new_pos = parseInt(match.position_2) - 1;
        await match.update({ position_2: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap2 === sumap3){
        const resultado = 'empate'
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      
    } else if (currentPlayer.id === player3.id) {
      if (sumap3 > sumap1){
        const resultado = 'local'
        const new_pos = parseInt(match.position_3) + 1;
        await match.update({ position_3: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap3 < sumap1){
        const resultado = 'visita'
        const new_pos = parseInt(match.position_3) - 1;
        await match.update({ position_3: new_pos});
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
      else if (sumap3 === sumap1){
        const resultado = 0
        ctx.body = {
          resultado,
          sumap1,
          sumap2,
          sumap3,
          currentPlayer,
          player1,
          player2,
          player3,
        };
      }
    }
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

// router.get('/´comenzarpartida', async (ctx) => {
//   try {
//     const session = await ctx.orm.Session.findOne();
//     const match = await ctx.orm.Match.findOne();
//     const player1 = await match.getPlayer1();
//     const player2 = await match.getPlayer2();
//     const player3 = await match.getPlayer3();
//     const currentPlayer = await match.getCurrentPlayer();
//     const tableroID = await match.getTableroID();
//     const playerStats = await currentPlayer.getPlayer_Stats();
    
//     ctx.body = {
//       match,
//       carta,
//     };
//   } catch (error) {
//     console.log(error);
//     ctx.throw(404);
//   }
// });

router.post('/retroceder', async (ctx) => {
  try {
    const match = await ctx.orm.Match.findOne();
    // const match = await ctx.orm.Match.findByPk(match_id);
    const player1 = await match.getPlayer1();
    const player2 = await match.getPlayer2();
    const player3 = await match.getPlayer3();
    const currentPlayer = await match.getCurrentPlayer();

    if (player1.id === currentPlayer.id) {
      const new_pos = parseInt(match.position_1) - 1;
      await match.update({ position_1: new_pos});
    } else if (player2.id === currentPlayer.id) {
      const new_pos = parseInt(match.position_2) - 1;
      await match.update({ position_2: new_pos});
    } else if (player3.id === currentPlayer.id) {
      const new_pos = parseInt(match.position_3) - 1;
      await match.update({ position_3: new_pos});
    }

    ctx.body = {
      match,
    };
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});


module.exports = router;
