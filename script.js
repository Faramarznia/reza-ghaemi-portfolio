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

function scrollToProject() {
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
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 1.696;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
function scrollToEducation() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 1.258;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
function scrollToContact() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollTo = (documentHeight - windowHeight) / 0.5;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}
