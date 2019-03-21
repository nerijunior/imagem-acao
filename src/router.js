import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import GameView from '@/components/GameView'
import TeamsView from '@/components/TeamsView'
import ScoreBoardView from '@/components/ScoreBoardView'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'TeamsView',
      component: TeamsView
    },
    {
      path: '/game',
      name: 'GameView',
      component: GameView,
      meta: { requireGameStarted: true }
    },
    {
      path: '/scoreboard',
      name: 'ScoreBoardView',
      component: ScoreBoardView,
      meta: { requireGameStarted: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireGameStarted)) {
    if (!store.state.gameStarted) {
      Vue.notify({
        group: 'main',
        title: 'Atenção!',
        type: 'warn',
        text: 'O jogo ainda não começou!'
      })

      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
