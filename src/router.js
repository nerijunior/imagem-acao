import Vue from 'vue'
import Router from 'vue-router'

import GameView from '@/components/GameView'
import TeamsView from '@/components/TeamsView'
import PlacarView from '@/components/PlacarView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamsView',
      component: TeamsView
    },
    {
      path: '/game',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/placar',
      name: 'PlacarView',
      component: PlacarView
    }
  ]
})
