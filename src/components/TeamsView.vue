<template>
  <div class="teams-view">
    <Hero title="Times" subtitle="Defina os times e quantos jogares em cada"/>

    <div class="container">
      <div class="section">

        <div class="columns">
          <div class="column">
            <h1 class="title has-text-centered">{{ computedFirstTeamName }}</h1>

            <div class="columns">
              <div class="column">
                <FormField label="Nome do Time" type="text" v-model="firstTeamName"/>
              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Cor do Time</label>
                  <swatches  v-model="firstTeamColor" colors="basic" popover-to="left"></swatches>
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

          <div class="is-divider-vertical"></div>

          <!-- SECOND TEAM -->
          <div class="column">
            <h1 class="title has-text-centered">{{ computedSecondTeamName }}</h1>

            <div class="columns">
              <div class="column">
                <FormField label="Nome do Time" type="text" v-model="secondTeamName"/>
              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Cor do Time</label>
                  <swatches  v-model="secondTeamColor" colors="basic" popover-to="left"></swatches>
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

      </div>
    </div>

    <ScreenButton @click="playGame" :disabled="!readyToPlay"><CardsIcon class="icon is-large" /> JOGAR</ScreenButton>
  </div>
</template>

<script>
import ScreenButton from '@/components/atoms/ScreenButton'
import CardsIcon from 'vue-material-design-icons/Cards.vue'
import Hero from '@/components/molecules/Hero'
import Swatches from 'vue-swatches'
import FormField from '@/components/molecules/FormField'
import InputWithButton from '@/components/molecules/InputWithButton'
import _empty from 'lodash/isEmpty'
import { readyToPlay } from '@/util'

export default {
  components: {
    ScreenButton,
    CardsIcon,
    Hero,
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
    computedFirstTeamName () {
      return (!_empty(this.firstTeamName)) ? `Time: ${this.firstTeamName}` : 'Time 1'
    },

    computedSecondTeamName () {
      return (!_empty(this.secondTeamName)) ? `Time: ${this.secondTeamName}` : 'Time 1'
    },

    readyToPlay () {
      return readyToPlay()
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
    },

    playGame () {
      this.$store.dispatch('PLAY_GAME')
    }
  }
}
</script>

<style lang="scss" scoped>
.teams-view{
  width: 100%;
  position: relative;
}
.vue-swatches{
  width: 50px;
}
</style>
