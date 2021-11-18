import React, { useEffect, useState } from 'react'
import Style from '../styles/formulario.module.css'
import {AiOutlineUser ,AiOutlineKey}  from 'react-icons/ai'
import axios from 'axios'
import {useHistory} from 'react-router'

type FormType = {
    email : string ,
    senha : string
}

const formInicial : FormType = {
    email : '' ,
    senha : ''
}
const urltoken = 'http://localhost:3002/tokenvalido' ;
const url = 'http://localhost:3002/logar'

const Formulario = () => {


    const history = useHistory()

    useEffect( () => {

        const token = localStorage.getItem('token')
        console.log(token)
        axios.get(urltoken, {
            
                headers: {
                  Authorization: ''+ token
                }
        } )
        .then(resposta => {
            console.log(resposta)
            history.push('/dashboard')
         } )
    },[history])


    const [form , setForm] =  useState<FormType>(formInicial)
    const [erro , setErro] = useState('')

    function handleForm( e : React.ChangeEvent<HTMLInputElement>){
        setForm({...form  , [e.target.id] : e.target.value})
    }
   
    async function logar(e : React.FormEvent){
        e.preventDefault()
        
        axios.post(url , form)
            .then(resposta => resposta.data)
            .then(dados  => {
                setErro('')
                const token = dados.token
                localStorage.setItem('token' , token )
                history.push('/dashboard')
                
            })
            .catch(e => {
                setErro(e.response.data.error)
                
            })

    }

    return(
        <div className = {Style.container}>
            <form className = {Style.formulario} onSubmit = {(e : React.FormEvent) => logar(e)} >
            <h5>{erro}</h5>
            <h2>Logar</h2>
                <div className = {Style.input} >
                    <input type = 'text' required  id = 'email' value = {form.email} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleForm(e)}   />
                    <label>E-mail</label>
                    <AiOutlineUser className = {Style.icone} />
                </div>
                <div className = {Style.input} >
                    <input type = 'password' required id = 'senha' value = {form.senha} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleForm(e)}   />
                    <label >Senha</label>
                    <AiOutlineKey className = {Style.icone} />
                </div>
                <div className = {Style.divBotao}>
                    {/* <div>
                        <a href = '#'  >Registrar</p>
                        <a href = '#' >Esqueceu sua senha?</a>
                    </div> */}
                    <button>Entrar</button>
                </div>
            </form>
            <div className = {Style.logarCom}>
                <h4>Logar com</h4>
                <div>
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>google</p>
                </div>
            </div>
        </div>

    )
}


export default Formulario