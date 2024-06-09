const AVAILABLE_SIZES = {
  M: 2,
  L: 5,
  XL: 2,
};

const popup = document.querySelector("div.popup");
const preloader = document.querySelector("div.preloader");
const btnHeroBuy = document.querySelector("button.hero__button");

const form = document.querySelector("form.form");
const sizesBlock = document.querySelector("div.form__sizes");
const soldoutLabel = document.querySelector("p.popup__sold-out");

const itemsSizes = document.querySelectorAll("div.form__sizes-item");
const inputsAmount = document.querySelectorAll("input.form__sizes-amount");

let isShowPopup = false;

if (
  AVAILABLE_SIZES["M"] <= 0 &&
  AVAILABLE_SIZES["L"] <= 0 &&
  AVAILABLE_SIZES["XL"] <= 0
) {
  form.classList.add("hidden");
  soldoutLabel.classList.remove("hidden");
} else {
  form.classList.remove("hidden");
  soldoutLabel.classList.add("hidden");
}

itemsSizes.forEach((el) =>
  AVAILABLE_SIZES[el.dataset.size] <= 0
    ? el.classList.add("hidden")
    : el.classList.remove("hidden")
);

window.addEventListener("click", (e) => {
  if (isShowPopup) {
    !e.target.closest("div.popup__wrapper") &&
      !e.target.closest("div.buy__button") &&
      !e.target.closest("button.hero__button") &&
      togglePopup();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27 && isShowPopup) togglePopup();
});

const togglePopup = () => {
  if (isShowPopup) {
    popup.style.display = "none";
  } else {
    popup.style.display = "grid";
  }
  isShowPopup = !isShowPopup;
};

document.querySelectorAll("p.form__sizes-option").forEach((el) => {
  el.addEventListener("click", (e) => {
    const clickedOption = e.target;
    if (
      clickedOption
        .closest("div.form__sizes-item")
        .querySelector("input.form__sizes-amount")
        .classList.contains("hidden")
    ) {
      el.classList.add("form__option-toggled");
      clickedOption
        .closest("div.form__sizes-item")
        .querySelector("input.form__sizes-amount")
        .classList.remove("hidden");
    } else {
      el.classList.remove("form__option-toggled");
      clickedOption
        .closest("div.form__sizes-item")
        .querySelector("input.form__sizes-amount")
        .classList.add("hidden");
    }
  });
});
