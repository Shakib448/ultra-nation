import React from 'react';
import './Country.css'


const Country = (props) => {
    const { name, flag, languages, region, population, currencies } = props.country;

    const hadleAddContry = props.hadleAddContry

    return (
        <div>
            <div className="country-container">
                

                <h3>Country : {name}</h3>
                <br/>
                
                <img  src={flag} alt=""/>
                <br/>

                <h4>Region : {region} </h4>

                <h3>Population : {population} </h3>

                <h3>Currencies: {currencies[0].name} </h3>

                <h4>Languages : {languages[0].name}</h4>

                <br/>
                <button className="coutry-btn" onClick={() => hadleAddContry(props.country)} >Country</button> 
                <hr/>

            </div>
        </div>
    )
}

export default Country;
