const animateFormTransition = () => {
  let register = document.querySelector("#register");
  let login = document.querySelector("#login");
  let border = document.querySelector("#dinamicBorder");
  let formLogin = document.querySelector("#formLogin");
  let formRegister = document.querySelector("#formRegister");

  $(register).on("click", () => {
    if ($(register).hasClass("changed")) {
      $(register).removeClass("changed");
      $(login).removeClass("changed");
      $(border).removeClass("changed");
      setTimeout(() => $(formLogin).css("display", "none"), 1500);
      setTimeout(() => $(formRegister).css("display", "flex"), 1500);
      $(formRegister).addClass("fade-in");
      $(formRegister).removeClass("fade-out");
      $(formLogin).addClass("fade-out");
      $(formLogin).removeClass("fade-in");
    }
  });

  $(login).on("click", () => {
    if (!$(login).hasClass("changed")) {
      $(login).addClass("changed");
      $(register).addClass("changed");
      $(border).addClass("changed");
      setTimeout(() => $(formRegister).css("display", "none"), 1500);
      setTimeout(() => $(formLogin).css("display", "block"), 1500);
      $(formRegister).addClass("fade-out");
      $(formRegister).removeClass("fade-in");
      $(formLogin).addClass("fade-in");
      $(formLogin).removeClass("fade-out");
    }
  });
};

const main = () => {
  animateFormTransition();
};

main();
