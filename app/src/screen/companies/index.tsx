import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { table } from 'console';
import styled from './styled.module.scss';
import Table from '../../components/table';
const url = 'http://localhost:8000/companies';

const PageCompanies = () => {
    const [registeredCompanies, setRegisteredCompanies] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setRegisteredCompanies(response.data);
                console.log(registeredCompanies);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const tableCompanies = registeredCompanies.map(registeredCompanies => {
        return (
            <>
                <Table />
            </>
        )
    })

    return (
        <>
            <h1>Tela empresas</h1>
            <div className={styled.pageCompanies}>
                <div className={styled.card}>
                    {tableCompanies}
                </div>
            </div>
        </>
    )
}

export default PageCompanies;