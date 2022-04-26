<template>
  <div class="gen-chars">
    <div :key="char.id" v-for="char in charLst" class="characters-info">
      <charactersRowCards :characters="char" />
    </div>
  </div>
</template>

<script>
import { getCharacters } from "../modules.js";
import charactersRowCards from "./charactersRowCards.vue";

export default {
  name: "characterCard",
  props: {
    characters: Array,
  },
  components: {
    charactersRowCards,
  },
  data: () => {
    return {
      charLst: [],
    };
  },
  created() {
    getCharacters(this.characters).then((data) => {
      let result = [];
      let subresult = [];
      for (var i = 0; i < data.length; i++) {
        subresult.push(data[i]);
        if (i === data.length - 1) {
          result.push(subresult);
        } else {
          if ((i + 1) % 3 === 0) {
            result.push(subresult);
            subresult = [];
          }
        }
      }
      this.charLst = result;
    });
  },
};
</script>

<style lang="stylus">
.characters-info {
  align-content: center;
}</style>
