// ================================
// Smooth Fade-in Animation
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ================================
// Navbar Background on Scroll
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ================================
// Button Ripple Effect
// ================================

const button = document.querySelector(".contact button");

button.addEventListener("click", function(e){

    const circle = document.createElement("span");

    circle.classList.add("ripple");

    const x = e.clientX - e.target.offsetLeft;

    const y = e.clientY - e.target.offsetTop;

    circle.style.left = x + "px";

    circle.style.top = y + "px";

    this.appendChild(circle);

    setTimeout(()=>{

        circle.remove();

    },600);

});


// ================================
// Form Validation
// ================================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    const name = document.querySelector("input[name='name']").value.trim();

    const email = document.querySelector("input[name='email']").value.trim();

    const message = document.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        e.preventDefault();

        return;

    }

});