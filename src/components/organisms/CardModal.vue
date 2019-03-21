<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Palavras</p>
        <button @click="$emit('close')" class="delete" aria-label="close"></button>
      </header>

      <section class="modal-card-body">
        <CardContent
          :people="people"
          :object="object"
          :action="action"
          :hard="hard"
          :recreation="recreation"
          :mix="mix" />

        <div class="clock"><Timer /></div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import CardContent from '@/components/atoms/CardContent'
import Timer from '@/components/atoms/Timer'

export default {
  components: { CardContent, Timer },
  data () {
    return {
      people: 'Brazil',
      object: 'bandeira',
      action: 'amar',
      hard: 'paralelepipido',
      recreation: 'Kung Fu',
      mix: 'process',
      time: '1:15'
    }
  }
}
</script>

<style>
.clock{
  text-align: center;
  font-size: 200px;
}
</style>
