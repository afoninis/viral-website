const popup = document.querySelector("div.popup");
const preloader = document.querySelector("div.preloader");
const btnHeroBuy = document.querySelector("button.hero__button");

let isShowPopup = false;

// setTimeout(() => {
//   preloader.style.display = "none";
// }, 2000);

window.addEventListener("load", () => {
  preloader.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (isShowPopup) {
    !e.target.closest("div.popup__wrapper") &&
      !e.target.closest("div.buy__button") &&
      !e.target.closest("button.hero__button") &&
      togglePopup();
  }
  //   console.log(e.target.closest("div.popup"));
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27 && isShowPopup) togglePopup();
});

// btnHeroBuy.addEventListener("click", (e) => {
//   e.preventDefault();
//   togglePopup();
// });

const togglePopup = () => {
  if (isShowPopup) {
    popup.style.display = "none";
  } else {
    popup.style.display = "grid";
  }
  isShowPopup = !isShowPopup;
};
