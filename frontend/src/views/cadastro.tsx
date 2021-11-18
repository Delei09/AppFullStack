import React from 'react'
import Cadastro from '../components/cadastro'
import Main from "../components/main"
import Header from '../components/header'
import ContainerLogin from '../components/containerLogin'


const Cadastrar : React.FC = () => {

    return(
        <>
            <Header link1 = 'Logar' link2 = 'Cadastrar' />
            <Main >
                <ContainerLogin>
                    <Cadastro />
                </ContainerLogin>
            </Main>
       </>
    )
}

export default Cadastrar