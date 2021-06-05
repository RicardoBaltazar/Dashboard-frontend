import styled from './styled.module.scss';
import { Link } from 'react-router-dom';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import { useNotification } from '../../context/notification';

export default function Menu(){
    const { notification }  = useNotification();
    return (
        <>
            <div className={styled.sidebar}>
                <a className={styled.linkMenu} href="/"><MdAccountBalance /></a>
                {notification && <a className={styled.notification} href="/companies"><MdWork /></a>}
                {!notification && <a className={styled.linkMenu} href="/companies"><MdWork /></a>}
                <a className={styled.linkMenu} href="/register"><MdAddCircleOutline /></a>
            </div>
        </>
    )
}