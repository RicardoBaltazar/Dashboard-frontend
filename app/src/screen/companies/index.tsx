import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { table } from 'console';
import styled from './styled.module.scss';
import Table from '../../components/table';
const url = 'http://localhost:8000/companies';

interface Props {
    name: string;
    cnpj: String
    uf: String
    cep: String
    opendate: String
}

const PageCompanies = (props : Props) => {
    const [registeredCompanies, setRegisteredCompanies] = useState([props]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setRegisteredCompanies(response.data);
                console.log(response.data)
                console.log(registeredCompanies[0].name);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const tableCompanies = registeredCompanies.map((registeredCompanies, index) => {
        return (
            <>
                <Table 
                key={index}
                name={registeredCompanies.name}
                cnpj={registeredCompanies.cnpj}
                uf={registeredCompanies.uf}
                cep={registeredCompanies.cep}
                opendate={registeredCompanies.opendate}
                />
            </>
        )
    })

    return (
        <>
            <div className={styled.pageCompanies}>
                <div className={styled.card}>
                    <tr className={styled.th}>
                        <th>Identificação</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                        <th>Data de Abertura</th>
                    </tr>
                    {tableCompanies}
                </div>
            </div>
        </>
    )
}

export default PageCompanies;