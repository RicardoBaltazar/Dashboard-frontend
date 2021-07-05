import React, { useState, useEffect, useContext, memo } from 'react';
import axios from 'axios';
import { table } from 'console';
import styled from './styled.module.scss';
import Table from '../../components/table';
import AddButton from '../../components/addButton';
import Pagination from '../../components/pagination';
import { useParams } from "react-router-dom";

interface Props {
    id: string;
    name: string;
    cnpj: string;
    uf: string;
    cep: string;
    opendate: string;
    pagination: string;
}

const PageCompanies: React.FC<Props> = (props) => {
    const [registeredCompanies, setRegisteredCompanies] = useState([props]);
    const [id, setId] = useState<String>();
    let { pagination }  = useParams<Props>();
    const url = `http://localhost:8000/companies/?_page=${pagination}&_limit=4`;

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

    const handleSubmitDelete = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        axios.delete(`http://localhost:8000/companies/${id}/`)
            .then(resp => {
                console.log(resp.data)
                console.log('Deletando dados')
                refreshPage();
            }).catch(error => {
                console.log(error);
            });
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    const tableCompanies = registeredCompanies.map((registeredCompanies, index) => {
        return (
            <>
                <form action="" onSubmit={handleSubmitDelete}>

                    <Table
                        key={index}
                        // id={registeredCompanies.id}
                        name={registeredCompanies.name}
                        cnpj={registeredCompanies.cnpj}
                        uf={registeredCompanies.uf}
                        cep={registeredCompanies.cep}
                        opendate={registeredCompanies.opendate}
                    >
                        <button
                            type="submit"
                            className={styled.DeleteBtn}
                            onClick={() => setId(registeredCompanies.id)}
                        >
                            Deletar
                        </button>
                    </ Table>
                </form>
            </>
        )
    })

    return (
        <>
            <div className={styled.pageCompanies}>
                <div className={styled.card}>
                    <div className={styled.headerCard}>
                        <p>EMPRESAS</p>
                    </div>

                    {tableCompanies}

                </div>
            </div>

            <AddButton />

            <div className={styled.pagination}>
                <Pagination link='/companies/1' number='1'/>
                <Pagination link='/companies/2' number='2'/>
                <Pagination link='/companies/3' number='3'/>
                <Pagination link='/companies/4' number='4'/>
                <Pagination link='/companies/5' number='5'/>
            </div>
        </>
    )
}

export default memo(PageCompanies);