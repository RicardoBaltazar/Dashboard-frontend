import React from 'react';
import styled from './styled.module.scss';
import { Link } from 'react-router-dom';
import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import { useNotification } from '../../context/notification';

export default function HeaderMenu(){

    return (
        <>
            <div className={styled.headerMenu}>
                <a className={styled.linkMenu} href="/"><MdAccountBalance /></a>
                <a className={styled.linkMenu} href="/companies"><MdWork /></a>
                <a className={styled.linkMenu} href="/register"><MdAddCircleOutline /></a>
            </div>
        </>
    )
}