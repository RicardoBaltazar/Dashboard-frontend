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
            <aside className='bg-blue-600 w-1/4 py-2  text-left text-white'>
                <h1 className='text-2xl font-bold text-white border-b-2 border-fuchsia-600 pb-4 px-8'>Dashboard</h1>

                <nav className='mt-4'>
                    <ul className='text-left font-bold px-4'>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900 rounded-lg'>Dashboard</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900 rounded-lg'>Cadastrar Empresa</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900 rounded-lg'>Cadastrar Funcionário</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900 rounded-lg'>Empresas Cadastradas</li>
                        </a>
                        <a href="">
                            <li className='mb-2 py-2 px-4 hover:bg-blue-900 rounded-lg'>Funcionários Cadastrados</li>
                        </a>
                    </ul>
                </nav>
            </aside>
        </>
    )
}