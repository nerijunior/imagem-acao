<template>
  <div id="app">
    <Sidebar />

    <router-view/>

    <notifications position="bottom right" group="main" />
  </div>
</template>

<script>
import Sidebar from '@/components/organisms/Sidebar'

export default {
  components: { Sidebar }
}
</script>

<style lang="scss">
#app{
  display: flex;
  flex-direction: row;
}
</style>
