<template>
  <div class="container teams-view">
    <h1 class="title has-text-centered">Times</h1>

    <div class="columns">
      <div class="column">
        <h1 class="title has-text-centered">Time 1</h1>

        <div class="columns">
          <div class="column">
            <FormField label="Nome do Time" type="text" v-model="firstTeamName"/>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Cor do Time</label>
              <swatches v-model="firstTeamColor" colors="text-advanced" popover-to="left"></swatches>
            </div>
          </div>
        </div>

        <hr>

        <InputWithButton
          type="text"
          @click="addFirstTeamPlayer"
          @enterKeyPressed="addFirstTeamPlayer"
          v-model="firstTeamPlayerName"
          buttonText="Adicionar"
          placeholder="Nome da pessoa"
        />

        <div class="tags are-medium">
          <span
            v-for="(player, index) in teams[0].players"
            :key="index"
            class="tag is-link is-large"
            :style="{ backgroundColor: firstTeamColor }"
          >
            {{ player }}
            <button @click="removePlayer(0, index)" class="delete"></button>
          </span>
        </div>
      </div>

      <!-- SECOND TEAM -->
      <div class="column">
        <h1 class="title has-text-centered">Time 2</h1>

        <div class="columns">
          <div class="column">
            <FormField label="Nome do Time" type="text" v-model="secondTeamName"/>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">Cor do Time</label>
              <swatches v-model="secondTeamColor" colors="text-advanced" popover-to="left"></swatches>
            </div>
          </div>
        </div>

        <hr>

        <InputWithButton
          type="text"
          @click="addSecondTeamPlayer"
          @enterKeyPressed="addSecondTeamPlayer"
          v-model="secondTeamPlayerName"
          buttonText="Adicionar"
          placeholder="Nome da pessoa"
        />

        <div class="tags are-medium">
          <span
            v-for="(player, index) in teams[1].players"
            :key="index"
            class="tag is-link is-large"
            :style="{ backgroundColor: secondTeamColor }"
          >
            {{ player }}
            <button @click="removePlayer(1, index)" class="delete"></button>
          </span>
        </div>
      </div>
    </div>

    <button :disabled="!readyToPlay" class="button is-large is-primary is-fullwidth">JOGAR</button>
  </div>
</template>

<script>
import Swatches from 'vue-swatches'
import FormField from '@/components/molecules/FormField'
import InputWithButton from '@/components/molecules/InputWithButton'
import _empty from 'lodash/isEmpty'

export default {
  components: {
    FormField,
    InputWithButton,
    Swatches
  },
  data () {
    return {
      firstTeamPlayerName: '',
      secondTeamPlayerName: ''
    }
  },

  computed: {
    readyToPlay () {
      const firstTeamHasAName = !_empty(this.teams[0].name)
      const firstTeamHasPlayers = !_empty(this.teams[0].players) && this.teams[0].players.length >= 2

      const secondTeamHasAName = !_empty(this.teams[1].name)
      const secondTeamHasPlayers = !_empty(this.teams[1].players) && this.teams[1].players.length >= 2

      return firstTeamHasAName && firstTeamHasPlayers && secondTeamHasAName && secondTeamHasPlayers
    },

    teams () {
      return this.$store.state.teams
    },

    firstTeamName: {
      get () {
        return this.$store.state.teams[0].name
      },

      set (value) {
        this.$store.commit('SET_TEAM_NAME', {
          team: 0,
          value
        })
      }
    },

    secondTeamName: {
      get () {
        return this.$store.state.teams[1].name
      },

      set (value) {
        this.$store.commit('SET_TEAM_NAME', {
          team: 1,
          value
        })
      }
    },

    firstTeamColor: {
      get () {
        return this.$store.state.teams[0].color
      },

      set (value) {
        this.$store.commit('SET_TEAM_COLOR', {
          team: 0,
          value
        })
      }
    },

    secondTeamColor: {
      get () {
        return this.$store.state.teams[1].color
      },

      set (value) {
        this.$store.commit('SET_TEAM_COLOR', {
          team: 1,
          value
        })
      }
    }
  },

  methods: {
    addFirstTeamPlayer () {
      if (_empty(this.firstTeamPlayerName)) {
        return
      }

      this.$store.commit('ADD_TEAM_PLAYER', {
        team: 0,
        player: this.firstTeamPlayerName
      })
    },

    addSecondTeamPlayer () {
      if (_empty(this.secondTeamPlayerName)) {
        return
      }

      this.$store.commit('ADD_TEAM_PLAYER', {
        team: 1,
        player: this.secondTeamPlayerName
      })
    },

    removePlayer (team, index) {
      this.$store.commit('REMOVE_TEAM_PLAYER', {
        team,
        index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
