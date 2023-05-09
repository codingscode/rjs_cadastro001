import React, { useState } from "react"
import { ChamadaPessoas } from '../../Produtos/utils'
import './UsuarioAdministrador.css'


const UsuarioAdministrador = () => {
   const [usuarios, setUsuarios] = useState([])
   
   ChamadaPessoas(setUsuarios)

   return (
      <div>
         <div className="uacabecalho" >Usuario Administrador</div>
         <div>
           <div className="uctitulo" >Lista de Usuários Comuns</div>
           {(usuarios).map((cada, i) => {
              return (
                 <div key={i} className='container' >
                    <div>Nome: {cada.nome}</div>
                    <div>Sobrenome: {cada.sobrenome}</div>
                    <div>Email: {cada.email}</div>
                    <div>Senha: {cada.senha}</div>
                    <div>Pagamento: {cada.pagamento}</div>
                 </div>
              )
           })}
         </div>
      </div>
   )
 
 }
 
 export default UsuarioAdministrador
 
 
 
 
 
 