<template>
  <div id="placar-view">
    <h1 class="title has-text-centered">PLACAR</h1>

    <div style="height: 90vh;">
      <ScoreBoard />
    </div>

    <div class="columns">
      <div class="column">
        <button @click="setPoint(0)" style="display: block; margin: auto;" class="button">PONTO</button>
      </div>
      <div class="column">
        <button @click="setPoint(1)" style="display: block; margin: auto;" class="button">PONTO</button>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreBoard from '@/components/organisms/ScoreBoard'

export default {
  components: {
    ScoreBoard
  },

  methods: {
    setPoint (team) {
      this.$store.commit('SET_POINT', { team: team, points: 1 })
    }
  }
}
</script>

<style>
#placar-view{
  width: 100%;
}
</style>
