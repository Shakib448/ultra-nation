import React from 'react'

const AddCountry = (props) => {
    const addCountry = props.addCountry;


    const total = addCountry.reduce((total, country) => total + country.population, 0 )

    // let totalPopultation = 0;
    // for (let i = 0; i < addCountry.length; i++) {
    //     const country = addCountry[i];
    //     totalPopultation = totalPopultation + country.population;
    // }
    
    return (
        <div>
            <h1>This is new country added: {addCountry.length}</h1>
            <p>Total Popultaion : {total} </p>
        </div>
    )
}

export default AddCountry;
