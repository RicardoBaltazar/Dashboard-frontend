import Cards from '../../components/cards';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import styled from './styled.module.scss';


const pageHome = () => {
    return (
        <>
        <div className={styled.cards}>
            <Cards title='Listar Empresas' icon={<MdWork />} link='/companies'/>
            <Cards title='Cadastrar Empresas' icon={<MdAddCircleOutline />} link='/register' />
        </div>
        </>
    )
}

export default pageHome;