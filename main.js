const { createApp } = Vue;

createApp({
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
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                this.menuOpen = false;
            }
        }
    }
}).mount("#app");