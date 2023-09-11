var active = 3;

const hello_arr = ["Hello", "Hola", "Bonjour", "Sup.", "您好", "こんにちは ", "안녕하세요 ", "Ciao", "Χαίρετε ", "مرحباً ", "Olá "];


window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 220);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("navbar-item a");
  
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration in milliseconds
  
      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
  
      requestAnimationFrame(step);
    }
  
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  });
  