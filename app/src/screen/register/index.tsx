import React, { useState } from 'react';
import axios from 'axios';
import styled from './styled.module.scss';
import { VscLoading } from "react-icons/vsc";
import { useNotification } from '../../context/notification';
const url = 'http://localhost:8000/companies';

interface Props {
    notification: boolean
}

function PageRegister(props : Props){

    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [ loading, setLoading ] = useState(false);
    const { notification, setNotification }  = useNotification();
    
    const headers = {
        'Content-Type': 'application/json'
    }

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('enviando...');
        axios.post(url, {
            name: name,
            cnpj: cnpj,
            uf: city,
            cep: cep,
            opendate: openDate,
        }, {headers: headers})
        .then(function (response) {
            console.log(response);
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 8000);
    };

    return (
        <>
            <form className={styled.form} onSubmit={handleSubmit}>
                <div className={styled.card}>
                    <div className={styled.headerCard}>
                        <p>Empresas/CADASTRAR EMPRESAS</p>
                        <button type='submit' onClick={handleLoading}>
                            {loading && <span><VscLoading /></span>}
                            {!loading && 'SALVAR'}
                        </button>
                    </div>
                    <div className={styled.section}>
                        <div>
                            <label htmlFor="">Nome Da Empresa</label>
                            <input type="text" onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Cnpj</label>
                            <input type="text" onChange={e => setCnpj(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Cidade/UF</label>
                            <input type="text" onChange={e => setCity(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">CEP</label>
                            <input type="text" onChange={e => setCep(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Data de Abertura</label>
                            <input type="text" onChange={e => setOpenDate(e.target.value)} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PageRegister;