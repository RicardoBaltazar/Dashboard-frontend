import styled from './styled.module.scss';

interface Props {
    id: String
    name: string;
    cnpj: String
    uf: String
    cep: String
    opendate: String
    children: any
}

export default function Table(props: Props) {
    

    return (
        <>
            <tr className={styled.tr}>
                {props.id}
                <td>{props.name}</td>
                <td>{props.cnpj}</td>
                <td>{props.uf}</td>
                <td>{props.cep}</td>
                <td>{props.opendate}</td>
                {props.children}
            </tr>
            <hr />
        </>
    )
}
