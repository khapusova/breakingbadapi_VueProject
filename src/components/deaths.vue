<template>
  <div>
    <div class="death-block" v-show="isAnyDeaths === 1">
      <div :key="info.death_id" v-for="info in deathsInEpisode">
        <deathInfo :info="info" />
      </div>
    </div>
    <h2 v-show="isAnyDeaths === 0">There are no deaths in this episode</h2>
  </div>
</template>

<script>
import { getDeathsInEpisode } from "../modules.js";
import deathInfo from "./deathInfo.vue";
export default {
  name: "deaths",
  props: {
    season: String,
    episode: String,
  },
  components: {
    deathInfo,
  },

  data: () => {
    return {
      deathsInEpisode: [],
      isAnyDeaths: null,
    };
  },
  created() {
    getDeathsInEpisode(this.season, this.episode).then((data) => {
      if (data.length !== 0) {
        this.isAnyDeaths = 1;
      } else {
        this.isAnyDeaths = 0;
      }
      this.deathsInEpisode = data;
    });
  },
  methods: {},
};
</script>
<style scoped>
.death-block {
  margin: 0 auto;
  padding: 10px 10px;
  margin-block: 10px;
  border: 2px solid #cc2e5d;
  border-radius: 40px;
  box-sizing: content-box;
}
</style>