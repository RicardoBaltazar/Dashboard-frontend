import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PageCompanies = () => {

    const [ registeredCompanies, setRegisteredCompanies ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/companies')
        .then(response => {
            setRegisteredCompanies(response.data);
            console.log(registeredCompanies);
            console.log(registeredCompanies);
        });
    }, []);

    return (
        <>
            <h1>Tela empresas</h1>
        </>
    )
}

export default PageCompanies;