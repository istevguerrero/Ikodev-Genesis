import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    height: 80px;
    width: 100px;
    display: flex;
    position: absolute;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 10000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #0093B2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    &.active{
        color: #0093B2;
    }
`


export const Bars = styled(FaBars)`
    
    color: #0093B2;
    display: block;
    position: relative;
    top: 0;
    left: 22%;
    font-size: 1.8rem;
    cursor: pointer;
        
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    padding-right: 30px;
    padding-left: 1225%;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #00B0FF;
    padding: 10px 22px;
    color: #0093B2;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: #0093B2;
        color: #0093B2;
    }
`