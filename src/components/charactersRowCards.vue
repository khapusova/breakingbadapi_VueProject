<template>
  <div class="three-chars">
    <div :key="info.char_id" v-for="info in characters" class="single-char">
      <singleCharacterCard :info="info" />
    </div>
  </div>
</template>

<script>
import singleCharacterCard from "./singleCharacterCard.vue";
export default {
  name: "charactersRowCards",
  props: {
    characters: Array,
  },
  components: {
    singleCharacterCard,
  },
};
</script>

<style scoped>
.three-chars {
  white-space: wrap;
  display: inline-block;
}
.single-char {
  display: inline-block;
  margin: 20px;
  min-width: 200px;
  max-width: 15%;
  box-sizing: border-box;
  padding: 0 10px;
  border: 2px solid #cc2e5d;
  border-radius: 40px;
}
</style>