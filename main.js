import {skillData, projectData} from "./data.js"


let navBtn = document.querySelector(".menu-btn");
let mobNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", () => {
    mobNav.classList.toggle("active");
    navBtn.classList.toggle("active");
    const isActive = mobNav.classList.contains("active");
    if(isActive){
     document.body.style.overflow = "hidden" 
     navBtn.innerHTML = `
     <i class="fa-solid fa-xmark"></i>`
    }else{
        document.body.style.overflow = "auto"
        navBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>`
    }
})
const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobNav.classList.remove("active");
        navBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>`
    });
});

const skillContainer = document.querySelector(".skill-container");
console.log(skillContainer)
skillData.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.innerHTML = `
    <div class="skill-img">
              <img src=${skill.img} alt="${skill.name}">
            </div>
            <div class="skill-content">
              <h3>${skill.name}</h3>
              <p>${skill.desc}</p>
            </div>
    `
    skillContainer.appendChild(skillCard);

})




const projectContainer = document.querySelector('.project-container')
projectData.forEach(project=>{
  const projectCard = document.createElement('div')
  project.id  % 2 === 0 ? projectCard.classList.add('project-card','reverse') : projectCard.classList.add('project-card')
  projectCard.classList.add('project-card')
  projectCard.innerHTML = `
    <div class="project-img">
              <img src= ${project.img} alt="">

            </div>

            <div class="project-info">
              <h3> ${project.title} </h3>
              <p> ${project.desc} </p>
              <div class="used-skill">
              ${project.skills.map(skill=>`<span class="skill-tag">${skill} <i class="fa-solid fa-star"></i></span>`).join("")}
              </div>
              <a href="#" class="btn ">View Project <i class="fa-solid fa-arrow-right"></i></a>
            </div>
  `

  projectContainer.appendChild(projectCard)

})


