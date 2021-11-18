import { NextFunction , Response , Request } from "express";
import { login, palavraSecreta } from "../controller/cadastroController";
import { Usuarios } from "../database/models/usuariosModels";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";



export default class Autenticacao{

    static async localStorage(req  : Request , res : Response , next : NextFunction){

        try{
            const usuario : login = req.body
            const UsuarioExiste = await Usuarios.findOne({where : {email : usuario.email}})
              
            if(!UsuarioExiste){
                   return  res.status(401).json({error : 'Email ou senha invalido.'})
                }

                const {senha} = UsuarioExiste?.get()
                const senhaIgual = await bcrypt.compare(usuario.senha ,  senha)
                if(!senhaIgual){
                    return res.status(401).json({error : 'Email ou senha invalido.'})
                }
                next()
        }catch(err){
            res.status(500).json(err)
        }
            

    }

    static async AutenticacaoToken(req  : Request , res : Response , next : NextFunction){
        
        try{
            const token  = req.headers.authorization;
            if(!token){
                return res.status(401).json({error : 'Não autorizado'})
            }
            const tokenString = String(token)
             jwt.verify(tokenString , palavraSecreta)
            next()
        }catch(erro){
            res.status(400).json({error : 'Não autorizado catch'})
        }
       

    }
}