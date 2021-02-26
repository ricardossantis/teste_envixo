const animateFormTransition = () => {
  $("#register").on("click", () => {
    if ($("#register").hasClass("changed")) {
      $("#register").removeClass("changed");
      $("#login").removeClass("changed");
      $("#dinamicBorder").removeClass("changed");
      setTimeout(() => $("#formLogin").css("display", "none"), 1000);
      setTimeout(() => $("#formRegister").css("display", "flex"), 1000);
      $("#formRegister").addClass("fade-in");
      $("#formRegister").removeClass("fade-out");
      $("#formLogin").addClass("fade-out");
      $("#formLogin").removeClass("fade-in");
    }
  });

  $("#login").on("click", () => {
    if (!$("#login").hasClass("changed")) {
      $("#login").addClass("changed");
      $("#register").addClass("changed");
      $("#dinamicBorder").addClass("changed");
      setTimeout(() => $("#formRegister").css("display", "none"), 1000);
      setTimeout(() => $("#formLogin").css("display", "block"), 1000);
      $("#formRegister").addClass("fade-out");
      $("#formRegister").removeClass("fade-in");
      $("#formLogin").addClass("fade-in");
      $("#formLogin").removeClass("fade-out");
    }
  });
};

const carouselLogic = () => {
  let slideContainer = document.querySelector(".slideContainer");
  let dotsContainer = document.querySelector(".dotsContainer");

  for (let i = 0; i < 2; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.classList = "slide fade";

    let image = document.createElement("img");

    if (i == 0) {
      image.src = "./assets/img/image_01.svg";
    } else if (i == 1) {
      image.src = "./assets//img/image_02.svg";
    }

    $(slideContainer).append(imageContainer);
    $(imageContainer).append(image);

    let dot = document.createElement("div");
    dot.className = "dot";

    $(dotsContainer).append(dot);
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  const init = (n) => {
    slides.forEach((slide) => {
      slide.style.display = "none";
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
  };
  document.addEventListener("DOMContentLoaded", init(currentSlide));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      init(index);
      currentSlide = i;
    });
  });
};

const formSubmit = () => {
  $("#buttonRegister").on("click", (e) => {
    e.preventDefault();
    console.log("Register");
  });

  $("#buttonLogin").on("click", (e) => {
    e.preventDefault();
    console.log("Login");
  });
};

const main = () => {
  animateFormTransition();
  carouselLogic();
  formSubmit();
};

main();
