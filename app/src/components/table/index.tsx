import styled from './styled.module.scss';

interface Props {
    // id: String
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
                {/* {props.id} */}

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
{/* 
                <div>

                <span>Cep</span>
                <td>{props.cep}</td>
                </div>

                <div>
                    
                <span>Data de Abertura</span>
                <td>{props.opendate}</td>
                </div> */}

                {props.children}
            </tr>
            <hr />
        </>
    )
}

export default Table;
