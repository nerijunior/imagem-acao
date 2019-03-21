<template>
  <div class="sidebar">
    <div class="logo">
      <h1>Imagem<br>e Ação</h1>
    </div>

    <ul class="menu">
      <router-link exact tag="li" to="/" active-class="active"><AccountGroupIcon class="icon" /> Times</router-link>
      <router-link v-if="gameStarted" tag="li" to="/game" active-class="active"><CardsIcon class="icon" /> Partida</router-link>
      <router-link v-if="gameStarted" tag="li" to="/scoreboard" active-class="active"><CounterIcon class="icon" /> Placar</router-link>
    </ul>
  </div>
</template>

<script>
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import CounterIcon from 'vue-material-design-icons/Counter.vue'
import CardsIcon from 'vue-material-design-icons/Cards.vue'

export default {
  components: {
    AccountGroupIcon,
    CounterIcon,
    CardsIcon
  },

  computed: {
    gameStarted () {
      return !!this.$store.state.gameStarted
    }
  }
}
</script>

<style lang="scss" scope>
.sidebar{
  width: 140px;
  height: 100vh;
  background: #F6F6F6;
  text-align: center;
  font-weight: bold;

  .logo{
    color: #4C5D65;
    margin: 50px 0 100px;
    h1{
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  .menu{
    li {
      cursor: pointer;
      width: 100%;
      padding: 20px 0;
      color: rgb(118, 131, 136);

      &.active{
        cursor: default;
      }

      &.active, &:hover{
        background: #00d1b2;
        color: white;
      }

      .icon{
        display: block;
        margin: auto;
        width: 24px;
        height: 24px;

        svg{
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
        }
      }
    }
  }

}
</style>
