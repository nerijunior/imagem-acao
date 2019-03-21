<template>
  <div id="game-view">
    <CardModal v-if="showCard" />
  </div>
</template>

<script>
import CardModal from '@/components/organisms/CardModal'

export default {
  name: 'GameView',
  components: { CardModal },
  data () {
    return {
      showCard: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#game-view{
  width: 100%;
}
</style>
