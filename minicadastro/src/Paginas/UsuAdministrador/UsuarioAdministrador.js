import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChamadaPessoas, ApagarPessoa } from '../../Produtos/utils'
import './UsuarioAdministrador.css'


const UsuarioAdministrador = () => {
   const [usuarios, setUsuarios] = useState([])

   const navegar = useNavigate()
   
   ChamadaPessoas(setUsuarios)
   
   const apagar = (lista, quem) => {
      ApagarPessoa(lista, quem)
      navegar('/administrador', { replace: true })
   }

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
                    <button onClick={() => apagar(usuarios, cada.nome)} >apagar {cada.nome} </button>
                 </div>
              )
            })}
         </div>
      </div>
   )
 
}
 
 export default UsuarioAdministrador
 
 
 
 
 
 