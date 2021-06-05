import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const url = 'http://localhost:8000/companies';

const PageCompanies = () => {
    const [ registeredCompanies, setRegisteredCompanies ] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setRegisteredCompanies(response.data);
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