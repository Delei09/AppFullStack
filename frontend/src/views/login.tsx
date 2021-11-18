import Formulario from "../components/formulario"
import Main from "../components/main"
import Header from "../components/header"
import ContainerLogin from "../components/containerLogin"

const Login = () => {

    return(
        <>
            <Header link1 = 'Logar' link2 = 'Cadastrar' />
            <Main >
                <ContainerLogin>
                    <Formulario />
                </ContainerLogin>
            </Main>
        </>
    )
}

export default Login