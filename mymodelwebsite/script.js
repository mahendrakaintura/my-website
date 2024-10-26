function shuffleImages() {
    const container = document.querySelector('.container');
    const images = Array.from(container.querySelectorAll('img'));
    images.forEach(image => {
      const x = (Math.random() * 200) - 100;
      const y = (Math.random() * 200) - 100;
      const rotation = Math.random() * 180;
      image.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    });
  }
  
  // Shuffle images every 3 seconds
  setInterval(shuffleImages, 3000);
  
  // Initial shuffle on page load
  window.addEventListener('load', shuffleImages);
  // script.js

// script.js

// script.js

window.addEventListener('scroll', function() {
  var h2 = document.getElementById('headline');
  var position = h2.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;
  
  if (position < screenHeight) {
    h2.classList.add('show');
  }
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("text");
    setTimeout(function() {
        textElement.textContent = "I'm a developer";
        textElement.style.opacity = 1;
    }, 1000); // Change text after 1 second

    setTimeout(function() {
        textElement.textContent = "model";
    }, 2000); // Change text after 2 seconds
});
// script.js
// script.js