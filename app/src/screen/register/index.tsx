import React, { useState } from 'react';
import styled from './styled.module.scss';



const PageRegister = () => {

    const [ name, setName ] = useState('');
    const [ cnpj, setCnpj ] = useState('');
    const [ city, setCity ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ openDate, setOpenDate ] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(
            name,
            cnpj,
            city,
            cep,
            openDate,
        )
    }

    return (
        <>
            <form className={styled.form} onSubmit={handleSubmit}>
                <div className={styled.card}>
                    <div className={styled.headerCard}>
                        <p>Empresas/CADASTRAR EMPRESAS</p>
                        <button type='submit'>SALVAR</button>
                    </div>
                    <div className={styled.section}>
                        <div>
                            <label htmlFor="">Nome Da Empresa</label>
                            <input type="text" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Cnpj</label>
                            <input type="text" onChange={e => setCnpj(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Cidade/UF</label>
                            <input type="text" onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">CEP</label>
                            <input type="text" onChange={e => setCep(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Data de Abertura</label>
                            <input type="text" onChange={e => setOpenDate(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PageRegister;