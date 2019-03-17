<template>
  <div class="placar-view">
    <h1 class="title">PLACAR</h1>

  <el-row>
      <el-col :span="12">
        <h2 class="meninos">MENINOS</h2>
        <div class="pontos">{{ time1 }}</div>
        <el-button type="primary" @click="time1Ponto">TIME 1</el-button>
      </el-col>
      <el-col :span="12">
        <h2 class="meninas">MENINAS</h2>
        <div class="pontos">{{ time2 }}</div>
        <el-button type="danger" @click="time2Ponto">TIME 2</el-button>
      </el-col>
  </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      time1: 48,
      time2: 33
    }
  },
  methods: {
    time1Ponto () {
      this.time1 = this.time1 + 1
    },
    time2Ponto () {
      this.time2 = this.time2 + 1
    }
  },
  mounted () {
    const that = this

    window.addEventListener('keypress', function (e) {
      if (e.which === 49) {
        that.time1Ponto()
      } else if (e.which === 50) {
        that.time2Ponto()
      }
    })
  }
}
</script>

<style>
.placar-view{ text-align: center;}
.title{
  margin-bottom: 100px;
}
.meninos{ font-size: 30px; color: blue; }
.meninas{ font-size: 30px; color: red; }
.pontos{
  font-size: 500px;
  font-weight: bold;
  margin-bottom: 50px;
}
</style>
