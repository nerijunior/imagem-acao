<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input class="input" @keyup.enter="$emit('enterKeyPressed', $event.target.value)" @input="$emit('input', $event.target.value)" :type="type" :placeholder="placeholder">
    </div>
    <div class="control">
      <a @click="$emit('click')" class="button is-info">
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: { required: true, default: 'text' },
    placeholder: { required: false },
    label: { required: false },
    buttonText: { required: true }
  }
}
</script>

<style>

</style>
