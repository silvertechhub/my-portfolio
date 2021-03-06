

const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 45;
  const diameter = radius * 2;
  
  const circle = document.querySelector(".circular-text");
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  
  const text = circle.innerText;
  const characters = text.split("");
  circle.innerText = null;
  
  const startAngle = -90;
  const endAngle = 270;
  const angleRange = endAngle - startAngle;
  
  const deltaAngle = angleRange / characters.length;
  let currentAngle = startAngle;
  
  characters.forEach((char, index) => {
    const charElement = document.createElement("span");
    charElement.innerText = char;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
  
    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;
  
    currentAngle += deltaAngle;
    circle.appendChild(charElement);
  });
//   ------------------------ scroll

function updateList() {
	const titles = [...document.querySelectorAll('section, main ')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('section, main')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

// initalize Aos
AOS.init();


// -------------------------mobile menu
const menu = document.querySelector('.mobile-menu');
const icon = document.querySelector('.menu-icon');
const xIcon = document.querySelector('.xIcon')

icon.addEventListener("click", () => { menu.classList.toggle("hidden");
                                        icon.classList.toggle("hidden")
                                        xIcon.classList.remove("hidden")
 });

 xIcon.addEventListener("click", () => {
   xIcon.classList.toggle("hidden");
   icon.classList.remove("hidden");
   menu.classList.add("hidden")
 });

 const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  icon.classList.remove("hidden")
    xIcon.classList.add("hidden");
    menu.classList.add("hidden");
}
 
// add preloader
const preloader = document.querySelector('#pre-loader');

window.addEventListener("load", loaded )
function loaded(event)
{
    setTimeout(function(){
      preloader.style.display = "none"
    },4100);
}