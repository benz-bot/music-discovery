const searchBox = document.querySelector(".search-box");
const categoryButtons = document.querySelectorAll(".category-btn");
const songCards = document.querySelectorAll(".song-card");

searchBox.addEventListener("input", function () {
  const searchText = searchBox.value.toLowerCase();

  songCards.forEach(function (card) {
    const songName = card.querySelector("h3").textContent.toLowerCase();
    const artistName = card.querySelector("p").textContent.toLowerCase();

    if (
      songName.includes(searchText) ||
      artistName.includes(searchText)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.textContent.toLowerCase();

    songCards.forEach(function (card) {
      const cardCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        cardCategory === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
