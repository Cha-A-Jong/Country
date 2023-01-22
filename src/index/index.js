const url='https://restcountries.com/v3.1/all'

async function getCountry(){
    const response = await fetch(url)
    if (!response.ok){
        throw new Error(
            'HTTP ERROR! STATUS: ${response.status}'
        );
    }
    const data = await response.json();

    data.forEach(country=>{

        const countryList = `<li>${country.name.official}, ${country.capital}</li>`;

        document.querySelector('ol').insertAdjacentHTML('beforeend',countryList);

    })
    // console.log(data)
    //
    // return data;

}