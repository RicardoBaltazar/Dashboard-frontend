import React from 'react';
// import styled from './styled.module.scss';
// import { MdAccountBalance, MdAddCircleOutline, MdWork } from "react-icons/md";
import { useNotification } from '../../context/notification';

export default function Menu() {
    const { notification } = useNotification();
    const [openMenu, setOpenMenu] = React.useState<boolean>(true);

    const menu = () => {
        if (openMenu) {
            alert('Fechando Menu')
            setOpenMenu(false);
        } else {
            setOpenMenu(true)
            alert('Abrindo Menu')
        }
    }

    return (
        <>
            {/* <div className={styled.sidebar}>
                <a className={styled.linkMenu} href="/">Dashboard</a>
                {notification && <a className={styled.notification} href="/companies/1"><MdWork /></a>}
                {!notification && <a className={styled.linkMenu} href="/companies/1"><MdWork /></a>}
                <a className={styled.linkMenu} href="/register"><MdAddCircleOutline /></a>
                <a href="" className='text-red-600'>asdasdasd</a>
            </div> */}
            <aside className='bg-blue-600 w-1/4 py-2 text-center text-white'>
                <h1 className='text-3xl font-bold text-white border-b-2 border-fuchsia-600 pb-4'>Dashboard</h1>

                <nav className='mt-4'>
                    <ul className='text-left font-bold px-4'>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900'>Dashboard</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900'>Cadastrar Empresa</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900'>Cadastrar Funcionário</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900'>Empresas Cadastradas</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900'>Funcionários Cadastrados</li>
                        </a>
                    </ul>
                </nav>
            </aside>
        </>
    )
}