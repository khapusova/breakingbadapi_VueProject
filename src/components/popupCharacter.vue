<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
    </div>
  </div>
</template>


<script>
export default {
  name: "popupCharacter",
  props: {
    character: Object,
  },
};
</script>