<template>
  <div id="game-view">

    <div class="columns">
      <div class="column">
        <div class="section">
          <nav class="panel">
          <p class="panel-heading">
            {{ teams[0].name }}
          </p>

          <a v-for="(player, index) in teams[0].players" :key="index" class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ player }}
          </a>
        </nav>

        <nav class="panel">
          <p class="panel-heading">
            {{ teams[1].name }}
          </p>
          <a v-for="(player, index) in teams[1].players" :key="index" class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ player }}
          </a>
        </nav>

        <button class="button is-primary is-large is-fullwidth" @click="showModal">Gerar Palavra</button>
        </div>
      </div>

      <div class="column">
        <div class="section">
          <ScoreBoard @close="console.log('teste')" />
        </div>
      </div>
    </div>

    <CardModal
      v-if="showCard"
      :teams="teams"
      @close="showCard = false"
      @teamPoint="teamPoint" />
  </div>
</template>

<script>
import CardModal from '@/components/organisms/CardModal'
import ScoreBoard from '@/components/organisms/ScoreBoard'

export default {
  name: 'GameView',

  components: { CardModal, ScoreBoard },

  data () {
    return {
      showCard: false
    }
  },

  computed: {
    teams () {
      return this.$store.state.teams
    }
  },

  methods: {
    showModal () {
      this.showCard = !this.showCard
    },

    teamPoint (payload) {
      this.$store.commit('SET_POINT', { team: payload.team, points: payload.points })
      this.showCard = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#game-view{
  width: 100%;
}
#scoreboard{
  height: 400px;
  position: relative;
}
</style>
