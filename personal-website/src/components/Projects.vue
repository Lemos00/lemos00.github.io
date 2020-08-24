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
              awards section dummy text Experience 
              section dummy text Experience section dummy text Experience section dummy text
            </p>
            <a href="https://github.com/Lemos00">
              <img src="../assets/images/icons/github-icon.png" alt="github icon"  class="project-icons">
            </a>
          </div>
          <div class="projects-img has-margin-right">
            <img src="../assets/images/projects/pathfinding.gif" alt="">
          </div>
        </div>
        <div class="projects-item" data-aos='fade-in' data-aos-delay='300'>
          <div class="projects-description">
            <h6>Dean's honor list (2020)</h6>
            <p>
              awards section dummy text Experience 
              section dummy text Experience section dummy text Experience section dummy text
            </p>
            <a href="https://github.com/Lemos00">
              <img src="../assets/images/icons/github-icon.png" alt="github icon"  class="project-icons">
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
    height: 50px;
    width: 50px;
    filter: invert(100%);
    margin-top: 3rem;
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