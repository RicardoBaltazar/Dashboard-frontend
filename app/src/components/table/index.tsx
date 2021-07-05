import React from 'react';
import styled from './styled.module.scss';

interface Props {
    name: string;
    cnpj: String
    uf: String
    cep: String
    opendate: String
    children: any
}

const Table: React.FC<Props> = (props) => {
    return (
        <>
            <tr className={styled.tr}>
                <div>
                    <span>Nome</span>
                    <td>{props.name}</td>
                </div>

                <div>
                    <span>Cnpj</span>
                    <td>{props.cnpj}</td>
                </div>

                <div>
                    <span>Cidade</span>

                    <td>{props.uf}</td>
                </div>
                {props.children}
            </tr>
            <hr />
        </>
    )
}

export default React.memo(Table);
