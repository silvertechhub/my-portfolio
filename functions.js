const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const brandName = document.querySelector(".brand-name");
const navItem = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    brandName.classList.toggle("active");
}
navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
    brandName.classList.remove("active") 
};
// btn to my projects
const projects = () => {
    const viewProjects = document.getElementById("project-section");
    viewProjects.scrollIntoView();
}