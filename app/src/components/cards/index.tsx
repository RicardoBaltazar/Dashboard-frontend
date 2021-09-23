import styled from './styled.module.scss';
import { Link } from "react-router-dom";

interface Props {
    title: string
    value: string
}

const Cards = (props: Props) => {
    return (
        <>
            {/* <Link to={props.link} className={styled.cardsHome}>
                <span>{props.icon}</span>
                <h3>Total</h3>
                <p>{props.title}</p>
            </Link> */}
            <div className='w-2/5 py-16 rounded-lg shadow bg-white'>
                <h3>{props.title}</h3>
                <p>{props.value}</p>
            </div>
        </>
    )
}

export default Cards;