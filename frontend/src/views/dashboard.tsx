import Main from "../components/main"
import Header from "../components/header"
import { useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router"

const urlToken = 'http://localhost:3002/tokenvalido'
const Dashboard = () => {

    const history = useHistory()
    useEffect( () => {
      
        const token = localStorage.getItem('token')
        axios.get(urlToken, {
            
                headers: {
                  Authorization: ''+ token
                }
        } )
        .then(resposta => console.log(resposta))
        .catch(e => {
            localStorage.setItem('token' , '')
            history.push('/')
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    return(
        <>
             <Header link1 = 'Home' link2 = 'Logout' />
            <Main>
                <h2>Pagina de Dashboard para usuario logado</h2>
            </Main>            
        </>
    )
} 

export default Dashboard