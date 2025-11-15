const API_KEY = "f01aedc5";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return alert("Enter a movie name!");

  // Fetch data from OMDb
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();

  // Clear previous results
  resultsDiv.innerHTML = "";

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const div = document.createElement("div");
      div.classList.add("movie");
      div.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;
      resultsDiv.appendChild(div);
    });
  } else {
    resultsDiv.innerHTML = `<p>No results found.</p>`;
  }
});
