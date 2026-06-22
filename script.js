
(function(){
  'use strict';

  /* ---------- Navbar background on scroll ---------- */
  var navbar = document.getElementById('navbar');
  function onScroll(){
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeMenu(){
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  }

  navToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close mobile menu when a link is clicked (smooth scroll handled natively via CSS) */
  var allNavLinks = navLinks.querySelectorAll('a');
  allNavLinks.forEach(function(link){
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Active link highlight (scroll-spy) ---------- */
  var sectionMap = {};
  document.querySelectorAll('section[id], main#home').forEach(function(sec){
    sectionMap[sec.id] = sec;
  });

  var spyObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var id = entry.target.id;
        allNavLinks.forEach(function(link){
          var matches = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', matches);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  Object.keys(sectionMap).forEach(function(id){
    spyObserver.observe(sectionMap[id]);
  });

  /* ---------- Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function(el){ revealObserver.observe(el); });

  /* ---------- Typing animation for hero name ---------- */
  var typingEl = document.querySelector('.typing');
  if (typingEl) {
    var fullName = 'Shrijita Ghosh.';
    var index = 0;

    function typeName() {
      typingEl.textContent = fullName.slice(0, index);
      index++;

      if (index <= fullName.length) {
        setTimeout(typeName, 110);
      }
    }

    setTimeout(typeName, 500);
  }
})();

//  Backend code for contact form submission

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

try {

    const response = await fetch(
        "http://localhost:5000/send-message",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                message
            })
        }
    );

    const data = await response.json();

    if (data.success) {

        formMsg.textContent = "Message sent successfully!";
        formMsg.className = "form-msg success";
        form.reset();

    } else {

        formMsg.textContent = "Failed to send message.";
        formMsg.className = "form-msg error";

    }

} catch (error) {

    console.log(error);

    formMsg.textContent = "Something went wrong.";
    formMsg.className = "form-msg error";

}

});

window.onclick = function(event){

    const modal =
        document.getElementById("certificateModal");

    if(event.target === modal){

        closeCertificate();

    }

};

function openCertificate(imagePath){

    document.getElementById("certificateImage")
            .src = imagePath;

    document.getElementById("certificateModal")
            .style.display = "flex";
}

function closeCertificate(){

    document.getElementById("certificateModal")
            .style.display = "none";
}

window.onclick = function(event){

const modal =
    document.getElementById("certificateModal");

if(event.target === modal){

    closeCertificate();

}

};

const themeToggle =
    document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".reveal.visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    });
    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }
    else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});