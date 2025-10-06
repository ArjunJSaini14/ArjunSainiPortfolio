var buttons = document.querySelectorAll(".icon-button");

buttons.forEach(function(button) {
  var modalId = button.getAttribute("data-modal");
  var modal = document.getElementById(modalId);
  var span = modal.querySelector(".close");

  // Open modal
  button.onclick = function() {
    modal.style.display = "block";
  }

  // Close with X
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close when clicking outside
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});


// Reveals elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 }); 

  reveals.forEach(el => observer.observe(el));
});


// Array of quotes
const quotes = ["Don't count the days, make the days count - Muhammed Ali",
               "Do the thing which you think you cannot do - Eleanor Roosevelt",
               "If there is no struggle, there is no progress - Fredrick Douglass",
               "It always seems impossible until it's done - Nelson Mandela"];

const today = new Date();
const index = today.getDate() % quotes.length;
const quoteOfTheDay = quotes[index];
document.getElementById("quoteOfTheDay").textContent = quoteOfTheDay;

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.profile-wrapper');
    const bubble = profile.querySelector('.quote-bubble');

    profile.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        bubble.textContent = randomQuote;
        bubble.style.opacity = 1;
        bubble.style.transform = "translateY(-50%) translateX(-10px)";
        
        setTimeout(() => {
            bubble.style.opacity = 0;
            bubble.style.transform = "translateY(-50%) translateX(0)";
        }, 5000);
    });
});