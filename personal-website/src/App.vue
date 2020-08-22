<template>
  <div id="app">
    <header>
      <div :class="menuClass" @click="menuSelected = !menuSelected">
        <div class="bar half start"></div>
        <div class="bar"></div>
        <div class="bar half end"></div>
      </div>      
      <nav :class="navClass">
        <ul class="nav-list">
          <li>
            <a href="app.vue" class="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" class="nav-link">About me</a>
          </li>
          <li>
            <a href="#experience" class="nav-link">Experience</a>
          </li>
          <li>
            <a href="#projects" class="nav-link">Projects</a>
          </li>
          <li>
            <a href="#awards" class="nav-link">Awards</a>
          </li>
          <li>
            <a href="#contact" class="nav-link">Contact me</a>
          </li>
        </ul>
      </nav>
        <div class="landing-text">
          <h1>Gabriel Lemos Rodrigues</h1>
          <h6>Computer Science student at Western University</h6>
          <div class="icons">
            <a href="https://github.com/Lemos00">
              <img src="./assets/images/icons/github-icon.png" alt="github icon" class="landing-icons">
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src="./assets/images/icons/linkedin-icon.png" alt="linkedin icon" class="landing-icons">
            </a>
            <a href="https://devpost.com/">
              <img src="./assets/images/icons/devpost-png.png" alt="devpost icon" class="landing-icons">
            </a>
            <a href="mailto:webmaster@example.com">
              <img src="./assets/images/icons/mail-logo.png" alt="devpost icon" class="landing-icons">
            </a>
          </div>
        </div>
    </header>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <section class="awards" id="awards">
      <div class="container">
        <div class="section-heading">
          <h1>Awards</h1>
          <h6>These are my awardss</h6>
        </div>
        <div class="awards-item">
          <div class="awards-description">
            <h6>Insight Lab @ Western University</h6>
            <h1>Testing the experience section</h1>
            <p>
              awards section dummy text Experience 
              section dummy text Experience section dummy text Experience section dummy text
            </p>
            <a href="#" class="cta">View details about this experience</a>
          </div>
          <div class="awards-img">
            <img src="./assets/images/beach.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-heading">
          <h1>experience</h1>
          <h6>These are my experienceSSSSSS</h6>
        </div>
        <div class="timeline">
          <ul>
            <li class="date" data-date="May 2020 - Aug 2020">
              <h1>Insight Lab @ Western University</h1>
              <p>
                CABELO TA TONY COUNTRY PRA MOSTRAR Q E DE VILAO
                LADO MAU E LADO P#$@ PRA MOSTRAR Q E P#@# COUNTRY
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-heading">
          <h1>Contact me</h1>
          <h6>This is the part where you contact me</h6>
        </div>
        <form action="">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter you Name" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter you email" required>
          <label for="email">Services:</label>
          <select name="services" id="service">
            <option value="">Employment</option>
            <option value="">Question</option>
          </select>
          <label for="subject">Subject:</label>
          <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'
export default {
  name: 'App',
  components: { Projects, AboutMe },
  data() {
    return {
      menuSelected: {
        type: Boolean,
        default: false
      }
    }
  },
  computed: {
    menuClass() {
      if (this.menuSelected === true) {
        return 'menu-toggler open'
      } else {
        return 'menu-toggler'
      }
    },
    navClass() {
      if (this.menuSelected === true) {
        return 'top-nav open'
      } else {
        return 'top-nav'
      }    
    }
  }
}
// $(document).ready(function() {
//   $('menu-toggler').on('click', function() {
//     $().toggleClass('open');
//   })
// })
</script>

<style>
@import './assets/styles/main.css';
</style>
