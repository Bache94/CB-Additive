
export function MouseGlow() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
  `;

  document.body.appendChild(canvas);

  let width = window.innerWidth;
  let height = window.innerHeight;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const colors = ['#00f2ff', '#bd00ff', '#ffffff']; // Cyan, Purple, White

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.life = 100;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.1) this.size -= 0.1;
      this.life--;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.life / 100;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].life <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    handleParticles();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('mousemove', (e) => {
    // Spawn multiple particles for a denser trail
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(e.clientX, e.clientY));
    }
  });

  return canvas;
}
