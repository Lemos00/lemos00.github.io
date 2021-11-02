<template>
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-heading">
          <h1>experience</h1>
          <h6>My past work experience</h6>
        </div>
        <div class="timeline" data-aos='fade-in' data-aos-delay='300'>
          <ul>
            <li class="date" data-date="May 2021 - Aug 2021">
              <h1>Microsoft | SWE intern</h1>
              <p>
                >> Took part in the <b>Microsoft Garage</b> internship program<br><br>
                >> Worked in the <b>core messaging team of Microsoft Teams</b>, with tasks
                related to <b>accessibility and performance</b> of the application<br><br>
                >> Developed an extension for Microsoft Teams that enabled a more personal and engaging messaging experience.
                Built using React with TypeScript and GraphQL to support the Web, Windows, Linux, VDI, and MacOS clients<br><br>
              </p>
            </li>
          </ul>
        </div>
        <div class="timeline" data-aos='fade-in' data-aos-delay='300'>
          <ul>
            <li class="date" data-date="May 2020 - Aug 2020">
              <h1>Insight Lab @ Western University | SWE intern</h1>
              <p>
                >> Worked on a research focused search engine that deeply analyzes
                academic papers with the goal of presenting the most detailed breakdown
                of documents<br><br>
                >> Made lexical analysis of research documents and extraction of 
                lexical data with <b>Elasticsearch and Vue.js</b><br><br>
                >> Greatly improved the visualization of data by creating
                components with <b>Vuejs and D3.js</b><br><br>
                >> All code was reviewed, perfected and shipped to production
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'Experience'
}
</script>