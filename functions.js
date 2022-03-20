const logo = document.querySelectorAll('#logo path');

for(let i =0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const brandName = document.querySelector(".brand-name");
const navItem = document.querySelectorAll(".nav-item");


const aboutmeSec = () => {
    const aboutMe = document.getElementById("aboutme-section");
    aboutMe.scrollIntoView();
}

const projects = () => {
    const viewProjects = document.getElementById("project-section");
    viewProjects.scrollIntoView();
}

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active")
    brandName.classList.toggle("active")
}

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
    brandName.classList.remove("active") 
};

function hidePreloader() {
    const preloader = document.getElementById('loader');
    // preloader.style.opacity = '0';
    setTimeout(function() {
        preloader.style.display = "none";
    }, 5000)
}
// gsap--------------
// gsap.from(".hero", {opacity: 0, duration: 1, x:-50, delay: 4})
