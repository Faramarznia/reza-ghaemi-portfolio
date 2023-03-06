const filters = [
  ".dribbble",
  ".belender",
  ".vuesax",
  ".behance",
  ".google",
  ".fire",
  ".illustrator",
  ".photoshop",
  ".dou",
  ".ui8",
  ".figma",
  ".linkedin",
  ".xd",
  ".jam",
  ".dribbble2",
  ".belender2",
  ".vuesax2",
  ".behance2",
  ".google2",
  ".fire2",
  ".illustrator2",
  ".photoshop2",
  ".dou2",
  ".ui82",
  ".figma2",
  ".linkedin2",
  ".xd2",
  ".jam2",
];

for (let i = 0; i < filters.length; i++) {
  document.querySelector(filters[i]).style.opacity = 0.4;
  document.querySelector(filters[i]).style.filter = "grayscale(100%)";
}

setInterval(() => {
  const randomly = filters[Math.floor(Math.random() * filters.length)];
  document.querySelector(`${randomly}`).style.opacity = 1;
  document.querySelector(`${randomly}`).style.filter = "grayscale(0%)";
  document.querySelector(`${randomly}`).style.transition = "400ms";
  setInterval(() => {
    document.querySelector(`${randomly}`).style.opacity = 0.4;
    document.querySelector(`${randomly}`).style.filter = "grayscale(100%)";
    document.querySelector(`${randomly}`).style.transition = "400ms";
  }, 3000);
}, 700);
setInterval(() => {
  const randomly = filters[Math.floor(Math.random() * filters.length)];
  document.querySelector(`${randomly}`).style.opacity = 1;
  document.querySelector(`${randomly}`).style.filter = "grayscale(0%)";
  document.querySelector(`${randomly}`).style.transition = "400ms";
  setInterval(() => {
    document.querySelector(`${randomly}`).style.opacity = 0.4;
    document.querySelector(`${randomly}`).style.filter = "grayscale(100%)";
    document.querySelector(`${randomly}`).style.transition = "400ms";
  }, 2500);
}, 1000);
setInterval(() => {
  const randomly = filters[Math.floor(Math.random() * filters.length)];
  document.querySelector(`${randomly}`).style.opacity = 1;
  document.querySelector(`${randomly}`).style.filter = "grayscale(0%)";
  document.querySelector(`${randomly}`).style.transition = "400ms";
  setInterval(() => {
    document.querySelector(`${randomly}`).style.opacity = 0.4;
    document.querySelector(`${randomly}`).style.filter = "grayscale(100%)";
    document.querySelector(`${randomly}`).style.transition = "400ms";
  }, 2300);
}, 1300);

const toggle = document.getElementById("check");

function scrollToProject() {
  toggle.checked = false;
  // Get the height of the window and the document
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  // Calculate the position to scroll to
  const scrollTo = (documentHeight - windowHeight) / 3.65;

  // Scroll to the middle of the page
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
function scrollToGallery() {
  toggle.checked = false;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 1.696;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
function scrollToEducation() {
  toggle.checked = false;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 1.258;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
function scrollToContact() {
  toggle.checked = false;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 0.5;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}

const portfoContainer = document.querySelector(".portfolio-card");
let isDown = false;
let startX;
let scrollLeft;

portfoContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - portfoContainer.offsetLeft;
  scrollLeft = portfoContainer.scrollLeft;
});

portfoContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

portfoContainer.addEventListener("mouseup", () => {
  isDown = false;
});

portfoContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - portfoContainer.offsetLeft;
  const walk = (x - startX) * 0.8; // Adjust scroll speed here
  portfoContainer.scrollLeft = scrollLeft - walk;
});
const recContainer = document.querySelector(".recommend");

recContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - recContainer.offsetLeft;
  scrollLeft = recContainer.scrollLeft;
});

recContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

recContainer.addEventListener("mouseup", () => {
  isDown = false;
});

recContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - recContainer.offsetLeft;
  const walk = (x - startX) * 0.8; // Adjust scroll speed here
  recContainer.scrollLeft = scrollLeft - walk;
});

const button = document.getElementById("blubutton");

button.addEventListener("click", () => {
  const url = "https://adplist.org/mentors/reza-ghaemi";

  window.open(url, "_blank");
});

// const hamburger = document.querySelector(".hamburger")
// const navMenu = document.querySelector(".nav-menu")

// hamburger.addEventListener("click", ()=> {
//   hamburger.classList.toggle("active")
//   navMenu.classList.toggle("active")
// })

// document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
//   hamburger.classList.remove("active")
//   navMenu.classList.remove("active")
// }))
