<template>
  <button @click="$emit('click')" class="button is-primary" id="screen-button"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
#screen-button{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:  100px;
  font-size: 50px;
}

#screen-button .icon{
  display: inline-flex;

  svg{
    top: 12px;
    left: 0;
  }
}
</style>
