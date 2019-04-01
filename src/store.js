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
      // { player: , word: , weight: }
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
    },

    SET_POINT (state, payload) {
      state.teams[payload.team].score = state.teams[payload.team].score + parseInt(payload.points)
    },

    START_GAME (state) {
      state.gameStarted = true
    },

    STOP_GAME (state) {
      state.gameStarted = false
    }
  },

  actions: {
    PLAY_GAME (context) {
      localStorage.setItem('teams', JSON.stringify(context.state.teams))

      context.commit('START_GAME')
      router.push('/game')
    }
  }
})
