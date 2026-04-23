import { skillData, projectData } from "./data.js";

let navBtn = document.querySelector(".menu-btn");
let mobNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", () => {
  mobNav.classList.toggle("active");
  navBtn.classList.toggle("active");
  const isActive = mobNav.classList.contains("active");
  if (isActive) {
    document.body.style.overflow = "hidden";
    navBtn.innerHTML = `
     <i class="fa-solid fa-xmark"></i>`;
  } else {
    document.body.style.overflow = "auto";
    navBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>`;
  }
});
const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobNav.classList.remove("active");
    navBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>`;
  });
});

let rotationEffect = (el, val) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // normalize (-1 to 1)
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * val;
    const rotateX = -percentY * val;

    gsap.to(el, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power3.out",
      overwrite: true
    });
  });

  // reset on leave
  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  });
};



const skillContainer = document.querySelector(".skill-container");
console.log(skillContainer);
skillData.forEach((skill) => {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skill-card");
  skillCard.innerHTML = `
    <div class="skill-img">
              <img src=${skill.img} alt=${skill.name} loading="lazy">
            </div>
            <div class="skill-content">
              <h3>${skill.name}</h3>
              <p>${skill.desc}</p>
            </div>
    `;
  skillContainer.appendChild(skillCard);

  rotationEffect(skillCard, 30);
  
});

const projectContainer = document.querySelector(".project-container");
projectData.forEach((project) => {
  const projectCard = document.createElement("div");
  project.id % 2 === 0
    ? projectCard.classList.add("project-card", "reverse")
    : projectCard.classList.add("project-card");
  projectCard.classList.add("project-card");
  projectCard.innerHTML = `
    <div class="project-img">
              <img src= ${!project.img ? './images/Load.svg': project.img} alt= ${project.title} loading="lazy" >

            </div>

            <div class="project-info">
              <h3> ${project.title} </h3>
              <p> ${project.desc} </p>
              <div class="used-skill">
              ${project.skills.map((skill) => `<span class="skill-tag">${skill} <i class="fa-solid fa-star"></i></span>`).join("")}
              </div>
              <a href=" ${project.link}" target="blank" class="btn ">View Project <i class="fa-solid fa-arrow-right"></i></a>
            </div>
  `;

  projectContainer.appendChild(projectCard);

  rotationEffect(projectCard, 25);
 
});


emailjs.init("hg5aEMyrTdq1_CG5f");

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

    const userName =  document.getElementById("name").value
    const email =  document.getElementById("email").value
    const message =  document.getElementById("message").value
    const time = new Date().toLocaleDateString()

  emailjs.send("service_70zoq55", "template_xyo0trq", {
    userName,
    email,
    message,
    time

  }).then(() => {
    alert("Message sent ✅");
  }).catch(() => {
    alert("Error ❌");
  });

  emailjs.send("service_70zoq55", "template_ewckair", {
  userName,
  email,
  message
});
});