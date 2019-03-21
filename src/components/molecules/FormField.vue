<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control">
      <input class="input"
        :type="type"
        @blur="$emit('blur', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        :value="value"
        :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { required: false },
    label: { required: false },
    type: { required: true, default: 'text' },
    value: { required: true }
  }
}
</script>

<style>

</style>
