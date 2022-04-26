<template>
  <ul>
    <li>
      <h3>Dead: {{ info.death }}</h3>
    </li>
    <li>Number of deaths: {{ info.number_of_deaths }}</li>
    <li>Cause: {{ info.cause }}</li>
    <li>Last words: {{ info.last_words }}</li>
    <li>Responsinle: {{ info.responsible }}</li>
  </ul>
</template>

<script>
export default {
  name: "deathInfo",
  props: {
    info: Object,
  },
};
</script>