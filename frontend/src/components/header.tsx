import React from 'react'
import Style from '../styles/header.module.css'
import {GiAzulFlake} from 'react-icons/gi'
import {Link} from 'react-router-dom'

type links = {
    link1 : string ,
    link2 : string
}

const Header = (props : links) => {

    

    return(
        <header className = {Style.header}>
            <div>
                <Link to = '/'> <h2 ><GiAzulFlake className = {Style.logo} /> </h2> </Link>
            </div>
            <div className = {Style.link}>
              <Link to = '/' >{props.link1}</Link>
              <Link to = {`/${props.link2.toLocaleLowerCase()}`} >{props.link2}</Link>
            </div>
        </header>
    )
}

export default Header