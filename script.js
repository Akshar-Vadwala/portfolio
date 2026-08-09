// --- Typewriter Effect Logic ---
const roles = ["Backend Developer", "Data Engineer", "Systems Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } 
  
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}


// Function for handling the Project Tabs
function openProject(evt, projectName) {
  // Hide all project panes
  let panes = document.getElementsByClassName("project-pane");
  for (let i = 0; i < panes.length; i++) {
    panes[i].classList.remove("active-pane");
  }

  // Remove 'active' class from all tab buttons
  let tabs = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the specific pane and mark the button as active
  document.getElementById(projectName).classList.add("active-pane");
  evt.currentTarget.classList.add("active");
}

// Checkbox Light/Dark Theme Toggle logic
document.addEventListener('DOMContentLoaded', () => {

  typeEffect();

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSwitch.checked = false;
  }

  // Listen for switch changes
  toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});