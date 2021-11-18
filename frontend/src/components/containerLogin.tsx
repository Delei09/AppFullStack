
import ImagemLogin from '../img/login.jpg'
import React from 'react'
import Style from '../styles/containerLogin.module.css'



const ContainerLogin : React.FC = ({children}) => {

    return(
        <div className = {Style.main}>
        <section>
            {children}
        </section>
        <section>
            <img src = {ImagemLogin} alt='imagem Login' />
        </section>
        </div>
    )
}

export default ContainerLogin