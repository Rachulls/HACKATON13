const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
const loading = document.getElementById("loading");
const images = document.getElementById("imageContainer");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm !== "") {
    readLink(searchTerm);
  } else {
    images.style.display = "block";
  }
});

function readLink(searchItem) {
  let url = `https://api.unsplash.com/search/photos?page=1&query=${searchItem}&client_id=YNJ--HK97iGNIY88SydxicUd9AOCIupeVG5WmN01vQY`;
  loading.style.display = "flex";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      loading.style.display = "none";
      printLink(data);
    });
}

function printLink(printData) {
  result.innerHTML = "";
  images.style.display = "none";
  printData.results.forEach((item) => {
    const div = document.createElement("div");
    div.className = "image__container";
    div.innerHTML = `
        <div class="btn__container"><button class="btn__save">GUARDAR</button></div>
        <img class="bg-image" src=${item.urls.raw}/>
        `;
    result.appendChild(div);
  });
}
