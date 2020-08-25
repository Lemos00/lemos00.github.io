import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    })
  },
  render: h => h(App),
}).$mount('#app')

// Canvas code for Initial page
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

let particleArray = [];

// create a constructor function

function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;

}

// add draw method to particle prototype
Particle.prototype.draw = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
}

// const particle1 = new Particle(90, 90, 1, 1, 20, 'white');
// particle1.draw();

Particle.prototype.update = function(){
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
}

function init() {
    particleArray = [];
    for (let i = 0; i < 100; i++) {
        let size = Math.random() * 10;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = (Math.random() * .4) - .2; // speed of the particle
        let directionY = (Math.random()* .4) - .2; // speed of the particle
        let color = '#b0cac7';

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (let j = 0; j < particleArray.length; j++) {
        particleArray[j].update();
    }
}

init();
animation();

window.addEventListener('resize', 
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)
