import styled from './styled.module.scss';

interface Props {
    name: string;
    cnpj: String
    uf: String
    cep: String
    opendate: String
}

export default function Table(props: Props) {
    return (
        <>
            <tr className={styled.tr}>
                <td>{props.name}</td>
                <td>{props.cnpj}</td>
                <td>{props.uf}</td>
                <td>{props.cep}</td>
                <td>{props.opendate}</td>
                <button className={styled.DeleteBtn}>Deletar</button>
            </tr>
            <hr />
        </>
    )
}
