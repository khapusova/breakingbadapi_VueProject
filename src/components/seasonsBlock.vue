<template>
  <div class="general">
    <div :key="seasonKey" v-for="seasonKey in getKeys()" class="season-els">
      <seasonButton
        :text="seasonKey"
        :episodes="distributedObjects[seasonKey]"
      />
    </div>
  </div>
</template>

<script>
import seasonButton from "./seasonButton.vue";

export default {
  name: "seasonsBlock",
  props: {
    distributedObjects: Object,
  },
  components: {
    seasonButton,
  },
  methods: {
    getKeys() {
      return Object.keys(this.distributedObjects);
    },
  },
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 601px) {
  div {
    font-size: 15px;
  }
}

@media screen and (max-width: 800px) {
  div {
    font-size: 10px;
  }
}

@media screen and (max-width: 400px) {
  div {
    font-size: 5px;
  }
}
</style>