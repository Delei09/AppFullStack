import React, { FormEvent, useState } from 'react'
import Style from '../styles/cadastro.module.css'
import {AiOutlineUser ,AiOutlineKey , AiOutlineMail}  from 'react-icons/ai'
import {BsFillTelephoneFill}  from 'react-icons/bs'
import axios from 'axios'

type cadastroType  = {
    nome : string ,
    email : string ,
    telefone : string ,
    senha : string
} 

const cadastroInicial : cadastroType = {
    nome : '' ,
    email : '' ,
    telefone : '' ,
    senha : ''
}
const url = 'http://localhost:3002/cadastrar'

const Cadastro : React.FC = () => {

    const [cadastro , setCadastro] =  useState<cadastroType>(cadastroInicial)
    const [mensagem, setMensagem] = useState<string>('')

    function handleCadastro( e : React.ChangeEvent<HTMLInputElement>){
        setCadastro({...cadastro , [e.target.id] : e.target.value})
    }

    function limpar(){
        setCadastro(cadastroInicial)
    }

    function salvar(e : FormEvent){

        e.preventDefault()

        axios.post(url , cadastro)
            .then(res => {
                setMensagem("Usuario Salvo!")
                setCadastro(cadastroInicial)
                limpar()
            } )
            .catch(err => setMensagem('Usuario já cadastrado') )
    }

    return(
        <div className = {Style.container} >
            <form className = {Style.formulario} onSubmit = {(e : FormEvent) => salvar(e)} >
            <h5>{mensagem}</h5>
            <h2>Cadastro</h2>
                <div className = {Style.input}>
                    <input type = 'text ' required id = 'nome' value = {cadastro.nome}  onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleCadastro(e)}/>
                    <label >Nome</label>
                    <AiOutlineUser className = {Style.icone} />
                </div>
                <div className = {Style.input}>
                    <input type = 'text ' required id = 'email' value = {cadastro.email}   onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleCadastro(e)}/>
                    <label >Email</label>
                    <AiOutlineMail className = {Style.icone} />
                </div>
                <div className = {Style.input}>
                    <input type = 'text ' required id = 'telefone' value = {cadastro.telefone}   onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleCadastro(e)}/>
                    <label >Telefone</label>
                    <BsFillTelephoneFill className = {Style.icone} />
                </div>
                <div className = {Style.input}>
                    <input type = 'password' required id = 'senha'  value = {cadastro.senha}  onChange = {(e : React.ChangeEvent<HTMLInputElement>) => handleCadastro(e)}/>
                    <label >Senha</label>
                    <AiOutlineKey className = {Style.icone} />
                </div>
             
                <button>
                    Salvar
                </button>
            </form>
        </div>
    )
} 

export default Cadastro