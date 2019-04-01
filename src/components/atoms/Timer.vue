<template>
  <VueCountdown :time="time * 1000" :transform="transform" :auto-start="play" @progress="handleCountdownProgress">
    <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }}</template>
  </VueCountdown>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
import ClockTickSound from '@/assets/clock-tick.mp3'
import AlarmSound from '@/assets/short-alarm.mp3'
import { PLAYER_TIME } from '@/constants'
import { setTimeout } from 'timers'

export default {
  props: ['play'],

  data () {
    return {
      oldTitle: ''
    }
  },

  components: {
    VueCountdown
  },

  computed: {
    time () {
      return PLAYER_TIME
    }
  },

  mounted () {
    console.log('TESTE')
    this.oldTitle = document.title
    console.log(this.oldTitle)
  },

  methods: {
    transform (props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        const digits = value < 10 ? `0${value}` : value

        props[key] = `${digits}`
      })

      return props
    },

    start10SecondsTick () {
      const audio = new Audio(ClockTickSound)

      const interval = setInterval(() => {
        audio.currentTime = 0
        audio.play()
      }, 1000)

      setTimeout(() => {
        clearInterval(interval)
      }, 1000 * 10)

      setTimeout(() => {
        this.alarm()
      }, 1000 * 11)
    },

    alarm () {
      const audio = new Audio(AlarmSound)
      audio.play()
      audio.currentTime = 0

      this.$emit('stoped')
    },

    handleCountdownProgress (data) {
      if (data.totalSeconds === 11) {
        this.start10SecondsTick()
      }
    }
  }
}
</script>

<style>

</style>
