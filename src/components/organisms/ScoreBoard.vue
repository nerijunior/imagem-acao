<template>
  <div ref="scoreboars" id="scoreboard">
    <div class="columns">
      <div class="column team-column">
        <h2 class="team-name" :style="getFirstTeamNameStyle">{{ firstTeam.name }}</h2>
        <div class="points">{{ firstTeam.score }}</div>
      </div>

      <div class="is-divider-vertical" data-content="VS"></div>

      <div class="column team-column">
        <h2 class="team-name" :style="getSecondTeamNameStyle">{{ secondTeam.name }}</h2>
        <div class="points">{{ secondTeam.score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    firstTeam () {
      return this.$store.state.teams[0]
    },
    secondTeam () {
      return this.$store.state.teams[1]
    },
    getFirstTeamNameStyle () {
      return {
        color: this.firstTeam.color
      }
    },

    getSecondTeamNameStyle () {
      return {
        color: this.secondTeam.color
      }
    }
  },

  mounted () {
    const height = this.$refs['scoreboars'].clientHeight
    document.querySelectorAll('#scoreboard .points').forEach(el => {
      el.style.fontSize = height / 30 + 'rem'
    })
  }
}
</script>

<style>
#scoreboard{
  height: 100%;
}
.columns{
  height: 100%;
}
.team-column{
  text-align: center;
}
.team-name{
  font-size: 50px;
}
.points{
  font-size: 500px;
  font-weight: bold;
}
</style>
