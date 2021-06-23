import styled from './styled.module.scss';
import { Link } from "react-router-dom";


interface Props {
    title: String
    icon: Object
    link: string
}



const Cards: React.FC<Props> = (props) => {
    return (
        <>
            <Link to={props.link} className={styled.cardsHome}>
                <span>{props.icon}</span>
                <p>{props.title}</p>
            </Link>
        </>
    )
}

export default Cards;