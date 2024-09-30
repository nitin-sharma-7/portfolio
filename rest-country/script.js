//
const container = document.querySelector(".countries-container");
const filter = document.querySelector(".filter");
const input = document.querySelector(".input");
const darkMode = document.querySelector(".dark-mode");

//
darkMode.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("body").className == "dark"
    ? (darkMode.innerHTML = '<i class="fa-regular fa-sun">&nbsp</i>Light Mode')
    : (darkMode.innerHTML =
        '<i class="fa-regular fa-moon">&nbsp</i> Dark Mode');
});
function createCountryCard(data) {
  return data.forEach((country, index) => {
    const countryCardHtml = ` 
          <img class="country-flag" src='${country.flags.svg}' alt="${
      country.name.common
    }-flag" />
          <h4><b>${country.name.common}</b></h4>
          <p><b>Population : </b>${country.population.toLocaleString(
            "en-IN"
          )}</p>
          <p><b>Region : </b>${country.region}</p>
          <p><b>Capital : </b>${country.capital}</p> 
          `;
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `./country.html?name=${country.name.common}`;
    // query string ?key1=value1&kay2=value2
    countryCard.innerHTML = countryCardHtml;
    container.append(countryCard);
  });
}
fetch(" https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    createCountryCard(data);
  });

input.addEventListener("input", (e) => {
  container.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      createCountryCard(data);
    });
});
filter.addEventListener("change", (e) => {
  container.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      createCountryCard(data);
    });
});
