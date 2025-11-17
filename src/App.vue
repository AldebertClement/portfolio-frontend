<script>
import Background from "./components/Background.vue";
import NavMenu from "./components/NavMenu.vue";
import Welcome from "./components/Welcome.vue";

export default {
  components: {
    Background,
    NavMenu,
    Welcome,
  },
  data() {
    return {
      isNight: false,
    };
  },
  methods: {
    toogleNightFun(value) {
      this.isNight = value;
      console.log(this.isNight);
    }
  }
};
</script>

<template>
  <div id="app">
    <Background :isNight="isNight"/>
    <header id="header" :class="{ night: isNight }">
      <NavMenu @toggleNight="toogleNightFun"/>
    </header>

    <Welcome />
    <section id="AboutME" class="DivContent">
      <h1>About me</h1>
      <div id="WhoAmI" class="DivText">
        <h2>Who Am I?</h2>
        <p>
          I am Aldebert Clément, a full-stack developer specialized in Python and currently pursuing a Master’s degree
          in Computer Science (<a href="https://www.master-developpement-logiciel.fr/" target="_blank">SDL</a>)
          at the University of Toulouse, France.
        </p>
        <p>
          I discovered programming in high school through Python and quickly became passionate about software
          development.
          After earning my high school diploma with honors in computer science, I completed a
          <a href="https://iut.univ-tlse3.fr/bachelor-specialite-informatique" target="_blank">BUT in Computer
            Science</a>
          at IUT de Toulouse, followed by a Bachelor's degree to prepare for my current Master's program.
        </p>
        <p>
          I enjoy learning and exploring new technologies, especially in software engineering, virtualization,
          and embedded systems. My motivation lies in creating efficient, well-structured, and scalable solutions.
        </p>
      </div>

      <div id="Education" class="DivText">
        <h2>Education</h2>
        <ul>
          <li>Master’s degree in Software Development (SDL), University of Toulouse – Ongoing</li>
          <li>Bachelor’s degree in Computer Science, University of Toulouse</li>
          <li>BUT in Computer Science, IUT de Toulouse (with honors)</li>
          <li>French Baccalaureate with honors, Computer Science option</li>
        </ul>
      </div>

      <div id="Skills" class="DivText">
        <h2>Skills</h2>
        <h3>Languages & Frameworks</h3>
        <p>Java, Python, C, PL/SQL, Ada, JavaScript, OCaml, Vue.js, Coq (Roq)</p>
        <h3>Tools & Technologies</h3>
        <p>Docker, Git, UML, Flask, QEMU, Typst, Terraform, VictoriaMetrics, Prometheus, Alertmanager, Grafana, Node.js,
          Loki, PyCharm</p>
        <h3>Methodologies</h3>
        <p>Teamwork, Agile methods, Adaptability to new languages and technologies</p>
      </div>
    </section>

    <section id="Experience" class="DivContent">
      <h1>Experience</h1>
      <p>
        I have worked on several academic and technical projects, including a server supervision system
        at the Toulouse Institute of Mathematics and an energy optimization project for Raspberry Pi 3B
        boards using QEMU virtualization.
      </p>
      <p>
        These experiences have strengthened my understanding of monitoring, system management, and resource
        optimization.
        I particularly value communication, teamwork, and continuous learning through experimentation.
      </p>
    </section>

    <section id="Projects" class="DivContent">
      <h1>Projects</h1>
    </section>

    <section id="Contact" class="DivContent">
      <h1>Contact</h1>
      <p>
        Feel free to reach out for collaboration, questions, or professional opportunities.
      </p>
      <p>
        <a href="https://www.linkedin.com/in/clément-aldebert" target="_blank">LinkedIn</a> |
        <a href="mailto:clement.aldebert31@gmail.com">clement.aldebert31@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<style>
@import "assets/styles.css";
</style>