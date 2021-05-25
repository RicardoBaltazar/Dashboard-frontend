import styled from './styled.module.scss';
// import { Link } from "react-router-dom";


interface Props {
    title: String
    icon: Object
}



function Cards(props: Props){
    return (
        <>
            <div className={styled.cardsHome}>
                <span>{props.icon}</span>
                <p>{props.title}</p>
            </div>
        </>
    )
}

export default Cards;