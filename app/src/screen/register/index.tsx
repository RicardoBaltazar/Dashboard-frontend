import React, { useState } from 'react';
import axios from 'axios';
import styled from './styled.module.scss';
import { VscLoading } from "react-icons/vsc";
import { useNotification } from '../../context/notification';
const url = 'http://localhost:8000/companies';

const cities = [
    "Porto Alegre - RS",
    "Santa Catarina - SC"
]

const PageRegister: React.FC = () => {

    const [name, setName] = useState<String>('');
    const [cnpj, setCnpj] = useState<String>('');
    const [city, setCity] = useState<String>('');
    const [ loading, setLoading ] = useState<Boolean>(false);
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
                    </div>
                    <div className={styled.section}>
                        <div>
                            <label htmlFor="">Nome Da Empresa</label>
                            <input type="text" onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Cnpj</label>
                            <input type="text" maxLength={14} onChange={e => setCnpj(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Cidade/UF</label>
                            <input type="text" onChange={e => setCity(e.target.value)} />
                        </div>
                    </div>
                <button type='submit' onClick={handleLoading}>
                            {loading && <span><VscLoading /></span>}
                            {!loading && 'SALVAR'}
                        </button>
                </div>
            </form>
        </>
    )
}

export default PageRegister;