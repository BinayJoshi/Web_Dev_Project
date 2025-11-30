document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");

  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  });

  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  const dotsContainer = document.getElementById("carouselDots");

  let currentIndex = 0;
  let autoPlayId;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-index", index.toString());
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlideHandler() {
    showSlide(currentIndex - 1);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlideHandler();
    restartAutoPlay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index") || "0", 10);
      showSlide(index);
      restartAutoPlay();
    });
  });

  function startAutoPlay() {
    autoPlayId = setInterval(nextSlide, 5000);
  }

  function restartAutoPlay() {
    clearInterval(autoPlayId);
    startAutoPlay();
  }

  startAutoPlay();

  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      successMsg.textContent = "";

      let allValid = true;
      const groups = contactForm.querySelectorAll(".input-group");

      groups.forEach((group) => {
        const input = group.querySelector("input, textarea");
        const errorEl = group.querySelector(".error");

        if (!input) return;

        if (!input.value.trim()) {
          errorEl.textContent = "This field is required.";
          allValid = false;
        } else {
          errorEl.textContent = "";
        }
      });

      if (!allValid) return;

      contactForm.reset();
      successMsg.textContent =
        "Thank you for contacting us. We will reach out soon.";
    });
  }

  if (sessionStorage.getItem("loggedIn") !== "true") {
  }
});
