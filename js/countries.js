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
const getCountry = (desh) => {
  return `<div class="style">
    <h2>${desh.name.common}</h2>
    <img src="${desh.flags.png}">
  </div>`;
};
restCountries();
