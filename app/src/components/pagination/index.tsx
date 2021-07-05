import react from 'react';
import styled from './styled.module.scss';

interface Types {
    link: string;
    number: string;
}

const Pagination: React.FC<Types> = (props) => {
    return (
        <a 
        href={props.link}
        className={styled.pagination}
        >
            {props.number}
        </a>
    )
}

export default Pagination;