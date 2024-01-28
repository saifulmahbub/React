const saiful = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => Display(data));
};

const Display = (countries) => {
  console.log(countries);
  const countriesHtmL = countries.map((country) => getAllCountries(country));

  const container = document.getElementById("countries");
  container.innerHTML = countriesHtmL.join(" ");
};

const getAllCountries = (land) => {
  return `
  <div class="box">
    <h2>${land.capital}</h2>
    <img src="${land.flags.png} "/>
  <div>

  `;
};
saiful();
