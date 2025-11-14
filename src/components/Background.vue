<script>
export default {
  props: {
    isNight: Boolean
  }
};
</script>

<template>
  <object
      :data="isNight ? '../../public/coffeeDark.svg' : '../../public/coffeeLight.svg'"
      type="image/svg+xml"
      class="background-svg"
  ></object>
</template>

<style scoped>
.background-svg {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  transform: translate(30%, 0%);
}
</style>