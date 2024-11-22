// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

const text = "As a dedicated Virtual Assistant, I specialize in providing comprehensive administrative support that enhances productivity and streamlines operations for businesses and entrepreneurs. With a strong background in appointment setter, admin works, and digital organization, I excel at managing schedules, coordinating communications, and handling various tasks with efficiency and attention to detail. My proficiency in a range of software tools and platforms allows me to adapt to diverse client needs, ensuring seamless collaboration and timely completion of projects. I am committed to delivering exceptional service, fostering positive relationships, and helping clients focus on their core objectives while I take care of the details.";
const typingTextElement = document.getElementById("typing-text");
let index = 0;

const text1 = "A virtual assistant is a self-employed worker who specializes in offering administrative services to clients from a remote location, usually a home office. Typical tasks a virtual assistant might perform include scheduling appointments, making phone calls, making travel arrangements, and managing email accounts.";
const typingTextElement1 = document.getElementById("text");
let index1 = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 10); // Adjust the speed of typing here (in milliseconds)
    }
}

function type1() {
    if (index1 < text1.length) {
        typingTextElement1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(type1, 30); // Adjust the speed of typing here (in milliseconds)
    }
}

// Start typing animations
type();
type1();

document.getElementById('phone-link').addEventListener('click', function(event) {
  // Optionally, prevent the default action
  event.preventDefault();
  
  // You can add any additional logic here if needed
  // For example, displaying a confirmation message before dialing
  const phoneNumber = this.getAttribute('href');
  if (confirm(`Do you want to call ${phoneNumber}?`)) {
      window.location.href = phoneNumber; // Initiates the call
  }
});
