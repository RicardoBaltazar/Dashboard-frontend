import Styled from './styled.module.scss';
import { VscAdd } from "react-icons/vsc";

const AddButton: React.FC = () => {
    return (
        <>
            <a href='/register' className={Styled.addbutton}>
                <VscAdd />
            </a>
        </>
    )
}

export default AddButton;