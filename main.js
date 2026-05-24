const DATA = {
  name: "Bhawana KC",
  role: "Hello, I am Bhawana KC, a Software Engineering student",

  bio: " I am Bhawana KC, a passionate software engineer focused on building efficient and user-friendly applications. I enjoy solving real-world problems using technology and turning ideas into practical digital solutions.I am interested in backend development and machine learning, and I continuously learn new tools and technologies to improve my skills.I believe in writing clean, maintainable code and following good software design principles.",

  education: {
    degree: "Bachelor of Engineering in  Software Engineering",
    school: "Gandaki College of Engineering and Science",
    year: "2022 - 2026"
  },



  projects: [
    {
      name: "SmartResell",
      desc: "Smart Resell is an AI/ML-based application that predicts the resale price of second-hand iPhones based on their condition, model, battery health, storage, and market trends",
      link: "https://github.com/bhawanakc07/SmartResell-Second-hand-Iphone-Price-Predictor-"
    }
  ]
};

// HERO LEFT SIDE
document.getElementById("heroLeft").innerHTML = `
  <div class="hero-left">
    <h1>Hello, I'm <span>Bhawana KC</span></h1>
    <h2>Software Engineering Student</h2>
    <p>
      Backend Developer & ML Enthusiast passionate about building real-world applications,
      solving problems, and learning new technologies.
    </p>

    <div class="hero-buttons">
      <a href="#projects" class="btn">View Projects</a>
      <a href="#contact" class="btn-outline">Contact Me</a>
    </div>
  </div>
`;

// HERO RIGHT SIDE
document.getElementById("heroRight").innerHTML = `
  <div class="hero-right">
    <div class="hero-card">
      <h3>Quick Info</h3>
      <p><b>Focus:</b> Web Development & ML</p>
      <p><b>Experience:</b> Student Level Projects</p>
      <p><b>Status:</b> Available for Internship</p>
    </div>
  </div>
`;

/* EMAIL BUTTON */
document.getElementById("emailBtn").href = `mailto:${DATA.email}`;

/* ABOUT */
document.getElementById("about-text").innerText = DATA.bio;

/* SKILLS */
document.getElementById("skills").innerHTML =
  DATA.skills.map(s => `<span class="tag">${s}</span>`).join(" ");

/* EDUCATION */
document.getElementById("education-box").innerHTML = `
  <h3>${DATA.education.degree}</h3>
  <p>${DATA.education.school}</p>
  <p>${DATA.education.year}</p>
`;


// Footer year
document.getElementById("footer-text").innerHTML =
  `© ${new Date().getFullYear()} Bhawana KC. All Rights Reserved.`;

// Smooth scrolling for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* CONTACT */
document.getElementById("contact-box").innerHTML = `
  <p>Email: ${DATA.email}</p>
`;


// =========================
// FOOTER YEAR AUTO UPDATE
// =========================
document.getElementById("footer-text").innerText =
  `© ${new Date().getFullYear()} Bhawana KC. All Rights Reserved.`;


// =========================
// SMOOTH SCROLL NAVBAR
// =========================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =========================
// ACTIVE NAV LINK HIGHLIGHT
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelector(".footer p").innerText =
  `© ${new Date().getFullYear()} Bhawana KC. All Rights Reserved.`;








// FOOTER YEAR
document.getElementById("footer-text").innerText =
  `© ${new Date().getFullYear()} Bhawana KC. All Rights Reserved.`;

// SMOOTH SCROLL + CLICK ANIMATION
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      // 🔥 CLICK ANIMATION (highlight effect)
      targetSection.classList.add("section-active");

      setTimeout(() => {
        targetSection.classList.remove("section-active");
      }, 600);

      // smooth scroll
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});