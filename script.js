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


// Music Section
const albums = document.querySelectorAll(".cd-container");

albums.forEach(album => {
    const cd = album.querySelector(".cd");
    const tonearm = album.querySelector(".tonearm");
    const audio = album.querySelector("audio");
    const startTime = parseFloat(album.dataset.start) || 0; 

    let isPlaying = false;

    cd.addEventListener("click", () => {
        if (!isPlaying) {
            albums.forEach(other => {
                if (other !== album) {
                    other.querySelector(".cd").classList.remove("spinning");
                    other.querySelector(".tonearm").classList.remove("rotate");
                    other.querySelector("audio").pause();
                }
            });
            cd.classList.add("spinning");
            tonearm.classList.add("rotate");
            audio.currentTime = startTime;
            audio.play();
            isPlaying = true;
        } else {
            cd.classList.remove("spinning");
            tonearm.classList.remove("rotate");
            audio.pause();
            isPlaying = false;
        }
    });
});

// Bar Scrolling
// About Me
document.getElementById('aboutMe').addEventListener('click', function() {
  const targetSection = document.getElementById('aboutMeScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Education
document.getElementById('education').addEventListener('click', function() {
  const targetSection = document.getElementById('educationScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Experience
document.getElementById('experience').addEventListener('click', function() {
  const targetSection = document.getElementById('experienceScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Projects
document.getElementById('projects').addEventListener('click', function() {
  const targetSection = document.getElementById('projectScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Technical Skills
document.getElementById('techSkills').addEventListener('click', function() {
  const targetSection = document.getElementById('techScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Highlight Reel
document.getElementById('highlightReel').addEventListener('click', function() {
  const targetSection = document.getElementById('highlightScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Music
document.getElementById('music').addEventListener('click', function() {
  const targetSection = document.getElementById('musicScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});

// Contact
document.getElementById('contact').addEventListener('click', function() {
  const targetSection = document.getElementById('contactScroll');
  targetSection.scrollIntoView({ behavior: 'smooth'});
});


