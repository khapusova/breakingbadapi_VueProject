<template>
  <div id="app">
    <seasonsBlock :distributedObjects="distributedBySeasonsEpisodes" />
  </div>
</template>

<script>
import seasonsBlock from "./components/seasonsBlock";

import { distributedBySeasons } from "./modules.js";

export default {
  name: "App",

  components: {
    seasonsBlock,
  },
  data() {
    return {
      distributedBySeasonsEpisodes: {},
    };
  },
  created() {
    distributedBySeasons("https://www.breakingbadapi.com/api/episodes")
      .then((data) => (this.distributedBySeasonsEpisodes = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
