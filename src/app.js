import axios from "axios";

console.log('Script is running..');

async function fetchCountryInformation() {
    const URI = 'https://restcountries.com/'
    const ENDPOINT = 'v2/all'

    try {
        const response = await axios.get(URI + ENDPOINT);
        //const countries = response.data;
        const {data: countries} = response;

        countries.sort ((a, b) => {
            return a.population - b.population;
        });


        const countryList = document.getElementById('countries');
        countryList.innerHTML = `<li>
        <h3 class="countries">${countries[0].name}</h3>
        <p>Has a population of ${countries[0].population} people</p>
        <img src="${countries[0].flags.png} "alt="${countries[0].name}"/>
        </li>`


        countries.map((country) => {
            countryList.innerHTML += `<li>
        <h3><span class="countries"> ${country.name}</span></h3>
         <p>Has a population of ${country.population} people</p>
         <img src="${country.flags.png}" alt="${country.name}"/>
         </li>`
        })


    } catch (error) {
        console.error(error)
    }

}
fetchCountryInformation()