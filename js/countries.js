const restCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (country) => {
  console.log(country);
  const countriesHtml = country.map((desh) => getCountry(desh));
  const box = document.getElementById("countries");
  box.innerHTML = countriesHtml.join(" ");
};
const getCountry = ({ name, flags, region, area }) => {
  //option1

  return `<div class="style">
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <p>Continent: ${region}</p>
    <img src="${flags.png}">
    <p>Continent: ${region}</p>
    <p>Area: ${area}</p>

  </div>`;
};
restCountries();
