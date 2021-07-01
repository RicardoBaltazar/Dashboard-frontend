import React from 'react';
import styled from './styled.module.scss';
import { Link } from 'react-router-dom';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import { useNotification } from '../../context/notification';

export default function Menu(){
    const { notification }  = useNotification();
    const [ openMenu , setOpenMenu ] = React.useState<boolean>(true);

    const menu = () => {
        if(openMenu){
            alert('Fechando Menu')
            setOpenMenu(false);
        } else {
            setOpenMenu(true)
            alert('Abrindo Menu')
        }
    }


    return (
        <>
            <div className={styled.sidebar}>
                {/* <button className={styled.btnClose} onClick={() => menu()}>Fechar</button> */}
                <a className={styled.linkMenu} href="/"><MdAccountBalance /></a>
                {notification && <a className={styled.notification} href="/companies"><MdWork /></a>}
                {!notification && <a className={styled.linkMenu} href="/companies"><MdWork /></a>}
                <a className={styled.linkMenu} href="/register"><MdAddCircleOutline /></a>
            </div>
        </>
    )
}