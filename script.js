/* ======================================
        DECODE LABS JAVASCRIPT
====================================== */

/* ---------- Smooth Scrolling ---------- */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ---------- Sticky Navbar Shadow ---------- */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow =
            "0 3px 10px rgba(0,0,0,.08)";

    }

});


/* ---------- Contact Form ---------- */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        form.querySelector("input[type='text']");

    const email =
        form.querySelector("input[type='email']");

    const message =
        form.querySelector("textarea");

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }

    alert("🎉 Thank you for contacting Decode Labs!");

    form.reset();

});


/* ---------- Card Animation ---------- */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.3

});

cards.forEach(card => {

    observer.observe(card);

});


/* ---------- Scroll To Top Button ---------- */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ---------- Active Navigation ---------- */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ---------- Hero Button ---------- */

const startBtn = document.querySelector(".primary-btn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document.querySelector("#services").scrollIntoView({

            behavior: "smooth"

        });

    });

}


const learnBtn = document.querySelector(".secondary-btn");

if (learnBtn) {

    learnBtn.addEventListener("click", () => {

        document.querySelector("#about").scrollIntoView({

            behavior: "smooth"

        });

    });

}


/* ---------- Card Hover Effect ---------- */

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


console.log("Decode Labs Website Loaded Successfully!");