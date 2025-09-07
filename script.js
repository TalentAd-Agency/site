// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(26, 26, 26, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "var(--dark-bg)";
    navbar.style.backdropFilter = "none";
  }
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  const button = event.target.querySelector(".submit-btn");
  const originalText = button.textContent;

  button.innerHTML =
    '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-check me-2"></i>Sent!';
    button.style.background = "#28a745";

    setTimeout(() => {
      event.target.reset();
      button.innerHTML = originalText;
      button.style.background = "var(--primary-orange)";
      button.disabled = false;
    }, 2500);
  }, 1500);
}

// Strategy card hover effects
document.querySelectorAll(".strategy-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Feature item hover effects
document.querySelectorAll(".feature-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)";
    this.style.boxShadow = "0 10px 25px rgba(255, 107, 53, 0.3)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Active navigation highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "white";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--primary-orange)";
    }
  });
});

// Page load animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
    animateOnScroll();
  }, 100);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 40) {
  let i = 0;
  element.innerHTML = "";
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

setTimeout(() => {
  const heroTitle = document.querySelector(".hero-text h1");
  const originalText = heroTitle.textContent;
  typeWriter(heroTitle, originalText, 30);
}, 800);

console.log("TalentAd.Agency website loaded successfully!");

// Closing the navbar on link/button click in mobile view
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Collapse navbar on any click inside it (links, buttons, theme toggle, etc.)
  document.querySelectorAll("#navbarNav a, #navbarNav button").forEach((el) => {
    el.addEventListener("click", () => {
      const isMobile = window.getComputedStyle(navbarToggler).display !== "none";
      const isExpanded = navbarCollapse.classList.contains("show");

      if (isMobile && isExpanded) {
        navbarToggler.click(); // Simulate toggler click to collapse
      }
    });
  });
});