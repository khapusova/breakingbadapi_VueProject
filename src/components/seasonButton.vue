<template >
  <div class="season-info">
    <button @click="showHideEpisodes()">{{ text }}</button>
    <div
      v-show="areEpisodesVisible"
      :key="episode.id"
      v-for="episode in episodes"
      class="episode-card"
    >
      <div class="ep-c">
        <episodeCard
          v-show="areEpisodesVisible"
          :title="episode.title"
          :air_date="episode.air_date"
          :characters="episode.characters"
          :season="episode.season"
          :episode="episode.episode"
          :series="episode.series"
        />
      </div>
    </div>
  </div>
</template>

<script>
import episodeCard from "./episodeCard.vue";

export default {
  name: "seasonButton",
  props: {
    text: String,
    episodes: Array,
  },
  components: {
    episodeCard,
  },
  data: () => {
    return { areEpisodesVisible: false };
  },
  methods: {
    showHideEpisodes() {
      this.areEpisodesVisible = !this.areEpisodesVisible;
    },
  },
};
</script>

<style lang="stylus" scoped>
.ep-c {
  display: inline-block;
}

.season-info button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(40%, #cc2e5d), color-stop(100%, #ff5858));
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  width: 40%;
  height: 70px;
  margin-block: 10px;
  border-radius: 40px;
}
</style>