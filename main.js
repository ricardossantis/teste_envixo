const animateFormTransition = () => {
  let first = document.querySelector("#first");
  let last = document.querySelector("#last");
  let border = document.querySelector("#dinamicBorder");

  $(first).on("click", () => {
    if ($(first).hasClass("changed")) {
      $(first).removeClass("changed");
      $(last).removeClass("changed");
      $(border).removeClass("changed");
    } else {
      $(first).addClass("changed");
      $(last).addClass("changed");
      $(border).addClass("changed");
    }
  });

  $(last).on("click", () => {
    if ($(last).hasClass("changed")) {
      $(last).removeClass("changed");
      $(first).removeClass("changed");
      $(border).removeClass("changed");
    } else {
      $(last).addClass("changed");
      $(first).addClass("changed");
      $(border).addClass("changed");
    }
  });
};

const main = () => {
  animateFormTransition();
};

main();
