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
              Among these tools is the paint bucket, which used the <b>four way version of the
              flood fill algorithm </b> to function nicely.

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

        <div class="projects-item" data-aos='fade-in' data-aos-delay='300'>
          <div class="projects-description">
            <h6>DOC-IN-POC (winner)</h6>
            <p>
              DocInPoc is your personal doctor in your pocket. <br />
              This prototype version aims for measuring the most likely disease its user
              could have according to their symptoms. 
              It also Diagnoses its patient based on the region
              they are located at. <br />
              I worked on the integration between <b>Voiceflow and dialogflow</b> APIs and also
              some complementary code for the diagnose of common diseases such as Flu or cold using
              <b>Javascript</b>
            </p>
            <a href="https://devpost.com/software/docinpoc">
              <img src="../assets/images/icons/devpost-png.png" alt="github icon"  class="project-icons">
            </a>
          </div>
          <div class="projects-img has-margin-right">
            <img src="../assets/images/projects/doc-in-poc.jpg" alt="">
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