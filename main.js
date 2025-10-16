const { createApp } = Vue;

createApp({
    data() {
        return {
            isNight: false
        }
    },
    methods: {
        toggleNight() {
            this.isNight = !this.isNight;
            document.body.classList.toggle('night', this.isNight);
        }
    }
}).mount('#app');
