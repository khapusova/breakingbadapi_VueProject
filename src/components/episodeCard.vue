<template>
  <div class="space-for-episode">
    <div class="frame" @click="showHideCharacterCards()">
      <div class="one-episode-info">
        <ul>
          <li>
            <h1>{{ title }}</h1>
          </li>
          <li>
            <h3>{{ `Episode № ${episode} in Series "${series}"` }}</h3>
          </li>
          <li>{{ air_date }}</li>
          <li>
            <p>{{ charactersArrToStr() }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="char-card">
      <characterCard v-show="isVisibleAdditInfo" :characters="characters" />

      <div v-show="isVisibleAdditInfo" class="deaths">
        <deaths :season="season" :episode="episode" />
      </div>
    </div>
  </div>
</template>

<script>
import characterCard from "./characterCard.vue";
import deaths from "./deaths.vue";
export default {
  name: "episodeCard",
  props: {
    title: String,
    air_date: String,
    characters: Array,
    season: String,
    episode: String,
    series: String,
  },
  components: {
    characterCard,
    deaths,
  },

  data: () => {
    return { isVisibleAdditInfo: false };
  },
  methods: {
    charactersArrToStr() {
      return this.characters.toString();
    },
    showHideCharacterCards() {
      this.isVisibleAdditInfo = !this.isVisibleAdditInfo;
    },
  },
};
</script>

<style lang="stylus">
.space-for-episode {
  display: inline;
  justify-content: space-between;
}

.frame {
  margin: 0 auto;
  padding: 10px 10px;
  margin-block: 10px;
  border: 5px solid #cc2e5d;
  border-radius: 40px;
  box-sizing: content-box;
  width: 500px;
}

.frame:click {
  padding: 0;
}

.one-episode-info {
  box-sizing: border-box;
  width: 100%;
}

ul {
  padding: 0;
}

li {
  display: block;
}
</style>