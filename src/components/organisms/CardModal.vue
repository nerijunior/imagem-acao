<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Palavras</p>
        <button @click="emitClose" class="delete" aria-label="close"></button>
      </header>

      <section class="modal-card-body">
        <div v-if="!started || stoped">
        <!-- <CardContent
          :people="people"
          :object="object"
          :action="action"
          :hard="hard"
          :recreation="recreation"
          :mix="mix" /> -->

          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tr v-for="(word, index) in words" :key="index" @click="selectWord(index)" :class="{ 'is-selected' : (index == selectedWord) }">
              <td>{{ word.word }}</td>
              <td width="2">{{ word.weight }}</td>
            </tr>
          </table>

          <button v-show="!stoped" class="button button-start is-fullwidth is-warning" :disabled="(selectedWord === null)" @click="started = true">Começar</button>
        </div>

        <div v-if="started && !stoped">
          <div class="subtitle"><span class="tag tag-word is-primary is-large">{{ words[selectedWord].word }}</span> </div>
          <div class="clock">
            <Timer @stoped="stoped = true" />
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button :disabled="(selectedWord === null)" class="button is-large" @click="emitTeamPoint(0)" :style="{ backgroundColor: teams[0].color }">{{ teams[0].name }}</button>
        <button :disabled="(selectedWord === null)" class="button is-warn is-large" @click="emitClose()">NINGUEM ACERTOU</button>
        <button :disabled="(selectedWord === null)" class="button is-large" @click="emitTeamPoint(1)" :style="{ backgroundColor: teams[1].color }">{{ teams[1].name }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
// import CardContent from '@/components/atoms/CardContent'
import Timer from '@/components/atoms/Timer'
import _random from 'lodash/random'
// import Data from '@/data'

// const getRandomWord = (words) => {
//   const length = words.length
//   const random = _random(0, length - 1, 0)

//   return words[random].word
// }

import { wordArray, wordArrayLength } from '@/data'

const getRandomWord = () => {
  return wordArray[_random(0, wordArrayLength, 0)].word
}

export default {
  props: [ 'teams' ],

  components: { Timer },

  data () {
    return {
      started: false,
      stoped: false,
      words: [],
      selectedWord: null
    }
  },

  methods: {
    selectWord (index) {
      if (this.stoped) {
        return
      }

      this.selectedWord = index
    },

    emitClose () {
      this.$emit('close')
    },

    emitTeamPoint (team) {
      const word = JSON.parse(JSON.stringify(this.words[this.selectedWord]))

      this.$emit('teamPoint', {
        team,
        points: word.weight
      })
    }
  },

  mounted () {
    for (let i = 6; i >= 1; i--) {
      // const length = Object.keys(Data).length
      // const random = _random(0, length - 1, 0)
      // const keys = Object.keys(Data)

      // const word = getRandomWord(Data[keys[random]])

      // this.words.push({
      //   word,
      //   weight: _random(1, 6, 0)
      // })

      this.words.push({
        word: getRandomWord(),
        weight: i
      })
    }
  }
}
</script>

<style lang="scss">
.clock{
  text-align: center;
  font-size: 200px;
}

.subtitle {
  text-align: center;
}

.modal .modal-card-foot {
  display: flex;
  justify-content: space-between;
}

.table td, .tag-word{
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
}
</style>
