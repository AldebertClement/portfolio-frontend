const {createApp} = Vue;

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
        },
        scrollToSection: function (id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({behavior: "smooth"});
            }
        }
    }
}).mount('#app');
