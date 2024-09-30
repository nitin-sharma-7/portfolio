//

const countryName = new URLSearchParams(location.search).get("name");
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((country) => {
    const languages = Object.values(country[0].languages).join(",");
    const currencies = Object.values(country[0].currencies)[0].name;
    const innerHtmlCountryPage = `<img
    class="country-page-flag"
    src=${country[0].flags.svg}
    alt="${country[0].name.common}-flag"
  />
  <div class="country-details-box">
    <h2 class="country-name"><b>${country[0].name.common}</b></h2>
    <div class="country-details">
      <div class="country-details-left">
        <p><b>Native Name :</b>${country[0].name.nativeName.eng?.official}</p>
        <p><b>Population : </b> ${country[0].population.toLocaleString(
          "en-IN"
        )}</p>
        <p><b>Region : </b> ${country[0].region}</p>
        <p><b>Sub Region : </b>${country[0].subregion}</p>
        <p><b>Capital : </b>${country[0].capital}</p>
      </div>
      <div class="country-details-right">
        <p><b>Top Level Domain : </b>${country[0].tld[0]}</p>
        <p><b>Currencies : </b>${currencies}</p>
        <p><b>Languages : </b>${languages}</p>
      </div>
    </div>
      <div class="border-countries">
        <b>Border Countries : </b>
      </div>
    
  </div>
  `;
    const countryPage = document.querySelector(".country-page");
    countryPage.innerHTML = innerHtmlCountryPage;
    const borderCountries = document.querySelector(".border-countries");
    country[0].borders?.forEach((border) => {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
        .then((res) => res.json())
        .then((data) => {
          const borderAncor = document.createElement("a");
          borderAncor.innerText = data[0].name.common;
          borderAncor.href = `./country.html?name=${data[0].name.common}`;
          borderCountries.append(borderAncor);
        });
    });
  });
