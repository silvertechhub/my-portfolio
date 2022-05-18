

const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 45;
  const diameter = radius * 2;
  
  const circle = document.querySelector("#circular-text");
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

// ------------------------gsap

// let tl = gsap.timeline({defaults: {ease: "none", duration: 2}});

// tl.to(".projectCardA", {opacity: 1, X:500, stagger:.6,  })
// // tl.to(".projectCard2", {opacity: 1, X:100, stagger:.4,  }, '-=2')

// // tl.to("#card2", {opacity: 1, x:-10, duration: 4},'-=2')