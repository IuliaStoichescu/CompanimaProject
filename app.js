const dropdown = document.querySelector('#authDropdown');
const accountButton = document.querySelector('#navButton');
dropdown.style.display = 'none';
const scrollContainer1 = document.querySelector(".firstContainer")
accountButton.addEventListener("mouseover", authOnMouse)

function authOnMouse() {
   console.log('it shows?')
   dropdown.style.display = 'flex'
}
//dropdown.style.display = 'none';

window.addEventListener("click", authOutMouse)

function authOutMouse() {
   console.log('Out')
   dropdown.style.display = 'none'
}

scrollContainer1.addEventListener("scroll", (event) => {
   console.log("Scroll event fired!");
   setTimeout(() => {
      console.log("Waiting on scroll events...");
   }, 1000);
});

const scrollContainer2 = document.querySelector(".secondContainer");

const observer = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
         }
      });
   },
   {
      threshold: 0.2,
   }
);

observer.observe(scrollContainer1);
observer.observe(scrollContainer2);