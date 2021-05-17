import styled from './styled.module.scss';
import { Link } from 'react-router-dom';

export default function Menu(){
    return (
        <>
            <div className={styled.sidebar}>
                <p>menu</p>
                <a href="/">a</a>
                <a href="/b">b</a>
                <a href="/c">c</a>
            </div>
        </>
    )
}