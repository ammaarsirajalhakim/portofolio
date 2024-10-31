//for navbar
window.onscroll = function () {
  makeNavbarSticky();
};

function makeNavbarSticky() {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// for button navigasi
const navLinks = document.querySelectorAll(
  "a.tohome, a.toabout, a.toproject, a.tocontact"
);

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.className.substring(2);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toggleFloatCard() {
  var floatCard = document.getElementById("floatCard");
  if (floatCard.style.display === "none" || floatCard.style.display === "") {
    floatCard.style.display = "block";
  } else {
    floatCard.style.display = "none";
  }
}

const floatElements = document.querySelectorAll(".float-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
        void entry.target.offsetWidth;
      }
    });
  },
  { threshold: 0.1 }
);

floatElements.forEach((element) => {
  observer.observe(element);
});
