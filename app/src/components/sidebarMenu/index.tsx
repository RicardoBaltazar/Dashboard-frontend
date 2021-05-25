import styled from './styled.module.scss';
import { Link } from 'react-router-dom';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";

export default function Menu(){
    return (
        <>
            <div className={styled.sidebar}>
                <a className={styled.linkMenu} href="/"><MdAccountBalance /></a>
                <a className={styled.linkMenu} href="/companies"><MdWork /></a>
                <a className={styled.linkMenu} href="/register"><MdAddCircleOutline /></a>
            </div>
        </>
    )
}