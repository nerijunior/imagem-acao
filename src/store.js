import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameStarted: false,
    teams: [
      {
        name: '',
        color: '#4a86e8',
        players: [],
        score: 0
      },
      {
        name: '',
        color: '#ff00ff',
        players: [],
        score: 0
      }
    ],
    turns: [

    ]
  },

  mutations: {
    SET_TEAM_NAME (state, payload) {
      const team = state.teams[payload.team]
      team.name = payload.value
      state.teams[payload.team] = team
    },

    SET_TEAM_COLOR (state, payload) {
      const team = state.teams[payload.team]
      team.color = payload.value
      state.teams[payload.team] = team
    },

    ADD_TEAM_PLAYER (state, payload) {
      state.teams[payload.team].players.push(payload.player)
    },

    REMOVE_TEAM_PLAYER (state, payload) {
      state.teams[payload.team].players.splice(payload.index, 1)
    }
  },

  actions: {
    PLAY_GAME () {
      router.push('/game')
    }
  }
})
