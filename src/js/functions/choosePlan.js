const plans = document.querySelectorAll(".card");

plans.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("card__btn")) {
      removeClass();
      e.currentTarget.classList.add("card--active");
    }
  });
});

function removeClass() {
  plans.forEach((card) => {
    if (card.classList.contains("card--active")) {
      card.classList.remove("card--active");
    }
  });
}
