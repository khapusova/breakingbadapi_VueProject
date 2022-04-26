<template>
  <div>
    <div class="character-card">
      <ul @click="showPopup()">
        <li>
          <img :src="info.img" alt="" />
        </li>
        <li>
          <h3>{{ info.name }}</h3>
        </li>
        <li>{{ info.nickname }}</li>
      </ul>
    </div>

    <div class="character-page" v-if="isPopupVisible">
      <popupCharacter :character="info">
        <h1>{{ info.name }} ({{ info.nickname }})</h1>
        <h2>Date of birth: {{ info.birthday }}</h2>
        <h2>{{ info.status }}</h2>
        <img :src="info.img" alt="" />
        <p>
          Was portrayed by <strong>{{ info.portrayed }}</strong>
        </p>
        <p>Appeared in {{ info.appearance.toString() }} seasons</p>
        <p>Involved in {{ info.category.toString() }} series</p>

        <button class="popup-close" @click="closePopup()">close</button>
      </popupCharacter>
    </div>
  </div>
</template>

<script>
import popupCharacter from "./popupCharacter.vue";
export default {
  name: "singleCharacterCard",
  props: {
    info: Object,
  },
  components: {
    popupCharacter,
  },
  data: () => {
    return { isPopupVisible: false };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.character-card img {
  margin: 15px 10px;
  min-width: 30px;
  max-height: 100px;
  box-sizing: content-box;
}

.character-page img {
  margin: 15px 10px;
  min-width: 30px;
  max-height: 300px;
  box-sizing: content-box;
}

.character-page {
  position: fixed;
  padding: 10px;
  width: 60%;
  top: 10%;
  left: 20%;
  background-color: #fff;
  border: 5px solid #cc2e5d;
  border-radius: 40px;
}

.character-page button {
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