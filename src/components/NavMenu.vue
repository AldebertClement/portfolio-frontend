<script>
export default {
  name: "NavMenu",
  emits: ["toggleNight"],
  data() {
    return {
      isNight: false,
      menuOpen: false
    };
  },
  methods: {
    toggleNight() {
      this.isNight = !this.isNight;
      document.body.classList.toggle('night', this.isNight);
      this.$emit("toggleNight", this.isNight);
      console.log(this.isNight);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior: "smooth"});
        this.menuOpen = false;
      }
    }
  }

}
</script>

<template>
  <button role="switch" class="ButtonHeader" @click="toggleNight" :class="{ night: isNight }">
    {{ isNight ? "night" : "light" }}
  </button>
  <button id="burger" class="ButtonHeader" @click="toggleMenu">☰</button>
  <nav id="navMenu" :class="{ open: menuOpen }">
    <button class="ButtonHeader" @click="scrollToSection('AboutME')">About me</button>
    <button class="ButtonHeader" @click="scrollToSection('Experience')">Experience</button>
    <button class="ButtonHeader" @click="scrollToSection('Projects')">Projects</button>
    <button class="ButtonHeader" @click="scrollToSection('Contact')">Contact</button>
  </nav>
</template>

<style scoped>

</style>