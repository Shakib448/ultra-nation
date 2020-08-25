import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './Components/Country/Country';
import AddCountry from './Components/AddedCountry/AddCountry';

function App() {

  const [countries, setCountries] = useState([]);

  const [addCountry, setAddCountry] = useState([]);

  useEffect(() => {
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(res => res.json())
    // .then(data => {
    //   setCountries(data);
    //   const name = data.map((country) => country.name).slice(0,10);
    //   console.log(name);
    // })
    const loadData = async () => {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setCountries(data);

      } catch (error) {
        console.log(error)
      }
    }

    loadData();

  },[])

  const hadleAddContry = (country) => {
    const newSelectCountry = [...addCountry, country];
    setAddCountry(newSelectCountry);
  } // always pass peratmer

  return (
      <div className="App">
            <h1>Total country : {countries.length} </h1>
          <AddCountry addCountry={addCountry}></AddCountry>

        {
          countries.map((country) => <Country country={country} key={country.alpha3Code} hadleAddContry={hadleAddContry}></Country>)
        }
      </div>
  )
}

export default App;
