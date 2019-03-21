<template>
  <table class="table is-bordered is-fullwidth">
    <tr>
      <td width="1">P</td>
      <td>{{ people }}</td>
    </tr>
    <tr>
      <td width="1">O</td>
      <td>{{ object }}</td>
    </tr>
    <tr>
      <td width="1">A</td>
      <td>{{ action }}</td>
    </tr>
    <tr>
      <td width="1">D</td>
      <td>{{ hard }}</td>
    </tr>
    <tr>
      <td width="1">L</td>
      <td>{{ recreation }}</td>
    </tr>
    <tr>
      <td width="1">M</td>
      <td>{{ mix }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: [
    'people',
    'object',
    'action',
    'hard',
    'recreation',
    'mix'
  ]
}
</script>

<style>

</style>
