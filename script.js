const searchBox = document.querySelector(".search-box");
const categoryButtons = document.querySelectorAll(".category-btn");
const songCards = document.querySelectorAll(".song-card");

let selectedCategory = "all";

function filterSongs() {
  const searchText = searchBox.value.toLowerCase();

  songCards.forEach((card) => {
    const songName = card.querySelector("h3").textContent.toLowerCase();
    const artistName = card.querySelector("p").textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch =
      songName.includes(searchText) ||
      artistName.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchBox.addEventListener("input", filterSongs);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.textContent.toLowerCase();

    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    filterSongs();
  });
});
const categoryButtons = document.querySelectorAll(".category-btn");
const songCards = document.querySelectorAll(".song-card");

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        songCards.forEach((song) => {
            if (
                selectedCategory === "all" ||
                song.dataset.category === selectedCategory
            ) {
                song.style.display = "block";
            } else {
                song.style.display = "none";
            }
        });
    });
});
