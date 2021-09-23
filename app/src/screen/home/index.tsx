import Cards from '../../components/cards';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import styled from './styled.module.scss';


const pageHome = () => {
    return (
        <>
        <div className={styled.cards}>
            <Cards 
                title='Listar Empresas' 
                value='1'
            />
            <Cards 
                title='Listar Empresas' 
                value='1'
            />
        </div>
        </>
    )
}

export default pageHome;