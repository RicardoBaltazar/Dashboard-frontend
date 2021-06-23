import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { table } from 'console';
import styled from './styled.module.scss';
import Table from '../../components/table';
import AddButton from '../../components/addButton';
const url = 'http://localhost:8000/companies/?_page=1&_limit=5';

interface Props {
    id: String
    name: string;
    cnpj: String
    uf: String
    cep: String
    opendate: String
}

const PageCompanies: React.FC<Props> = (props) => {
    const [registeredCompanies, setRegisteredCompanies] = useState([props]);
    const [id, setId] = useState<String>();

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
                            // onClick={() => setId(registeredCompanies.id)}
                        >
                            Editar
                        </button>
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
        </>
    )
}

export default PageCompanies;