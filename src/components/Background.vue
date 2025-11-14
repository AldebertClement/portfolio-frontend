<script>
export default {
  props: {
    isNight: Boolean
  }
};
</script>

<template>
  <div class="bg-container">
    <!-- Image Day -->
    <object
        data="/coffeeLight.svg"
        type="image/svg+xml"
        class="background-svg"
        :class="{ visible: !isNight }"
    ></object>

    <!-- Image Night -->
    <object
        data="/coffeeDark.svg"
        type="image/svg+xml"
        class="background-svg"
        :class="{ visible: isNight }"
    ></object>
  </div>
</template>

<style scoped>
.bg-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

.background-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(30%, 0%);

  /* Transition fluide 5s */
  opacity: 0;
  transition: opacity 1s ease;
}

/* L’image active devient visible */
.background-svg.visible {
  opacity: 1;
}
</style>