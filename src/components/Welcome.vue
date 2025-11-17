<script>
export default {
  name: 'Welcome',
  mounted() {
    const text = "Welcome!";
    const container = this.$refs.welcomeText;

    text.split("").forEach((letter, index) => {
      const wrapper = document.createElement("span");
      wrapper.classList.add("welcome-letter-wrapper");
      wrapper.style.setProperty("--i", index);

      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("welcome-letter");

      wrapper.appendChild(span);
      container.appendChild(wrapper);
    });
  }
};
</script>

<template>
  <section id="Welcome">
    <h1 class="h1Welcome" ref="welcomeText"></h1>
  </section>
</template>

<style>
#Welcome {
  align-content: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
}

.h1Welcome {
  font-size: 10rem;
  height: fit-content;
  transform: translateY(-50%);
  margin: 0;
  letter-spacing: 0.1rem;
}

.welcome-letter-wrapper {
  display: inline-block;
  animation: wave 4s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s + 1s);
}

.welcome-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-100px);
  animation: drop 0.7s ease-out forwards;
  animation-delay: calc(var(--i) * 0.12s);
}

@keyframes drop {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  60% {
    opacity: 1;
    transform: translateY(12px);
  }
  80% {
    opacity: 1;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes wave {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-14px);
  }
  60% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
