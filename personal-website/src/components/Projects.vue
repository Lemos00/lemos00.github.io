<template>
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-heading">
          <h1>Projects</h1>
          <h6>Some of my favorite projects I have worked on</h6>
        </div>
        <div class="projects-item" data-aos='fade-in' data-aos-delay='300'>
          <div class="projects-description">
            <h6>A* pathfinding visualizer</h6>
            <p>
              This project was built entirely with <b>Python</b> with the intention of better understanding
              how the <b>A* algorithm </b> works. With the help of tutorials and
              some research, I was able to fully understand and build a visualizer for such algorithm
              using the <b>pygame</b> library for python.
            </p>
            <a href="https://github.com/Lemos00/pathfinding-visualizer">
              <img src="../assets/images/icons/github-icon.png" alt="github icon"  class="project-icons">
            </a>
          </div>
          <div class="projects-img has-margin-right">
            <img src="../assets/images/projects/pathfinding.gif" alt="">
          </div>
        </div>
        <div class="projects-item" data-aos='fade-in' data-aos-delay='300'>
          <div class="projects-description">
            <h6>Liteboard.io</h6>
            <p>
              Liteboard is a lightweight lecturing platform designed as an easy/quick
              to use way for lectures to deliver their content. <br>
              In this project, I designed and implemented the tools used by the lecturer
              in the whiteboard using the <b>html canvas, javascript, css and Paper.js</b>. <br>
              Among these tools is the paint bucket, which used the four way version of the
              flood fill algorithm to function nicely.

            </p>
            <a href="https://github.com/Lemos00">
              <img src="../assets/images/icons/github-icon.png" alt="github icon"  class="project-icons">
            </a>
            <a href="https://liteboard.io/">
              <img src="../assets/images/icons/link-icon.png" alt="link icon"  class="project-icons">
            </a>
          </div>
          <div class="projects-img has-margin-right">
            <img src="../assets/images/projects/liteboard.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
.projects-item{
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    margin: 1rem auto;
    width: 70%;
    height: 30rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
}

.projects-description{
    flex: 1;
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
}

.projects-description h6{
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 200;
    opacity: 0.5;
    margin-bottom: 3rem;
}

.project-icons {
    height: 30px;
    width: 30px;
    filter: invert(100%);
    margin-top: 3rem;
    margin-left: 1rem;
}

.projects-description p{
    font-size: 1.5rem;
}

.projects-img{
    flex: 0.5;
    margin-left: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.projects-img img{
    width: 80%;
    float: right;
    border: 3px solid white;
}
</style>