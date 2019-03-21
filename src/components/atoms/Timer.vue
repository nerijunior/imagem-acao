<template>
  <VueCountdown :time="time * 1000" :transform="transform" :auto-start="play" @progress="handleCountdownProgress">
    <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }}</template>
  </VueCountdown>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
import ClockTickSound from '@/assets/clock-tick.mp3'
import { PLAYER_TIME } from '@/constants'

export default {
  props: ['play'],

  components: {
    VueCountdown
  },

  computed: {
    time () {
      return PLAYER_TIME
    }
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
