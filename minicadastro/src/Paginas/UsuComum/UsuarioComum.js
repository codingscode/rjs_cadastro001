import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const UsuarioComum = () => {
   const [uatual, setUatual] = useState({})
   const { state } = useLocation()


   const navegar = useNavigate()

  
   useEffect(() => {
      setUatual({...state})
      
   }, [])
  
   const sair = () => {
      navegar('/', { replace: true })
   }

   const editar = () => {
      navegar('/cadastrar', { state: uatual })
   }

   return (
      <div>
         <div>Usuário</div>
         <div>Nome: {uatual.nome}</div>
         <div>sobrenome: {uatual.sobrenome}</div>
         <div>Email: {uatual.email}</div>
         <div>Senha: {uatual.senha}</div>
         <div>Pagamento: {uatual.pagamento}</div>
         <button onClick={editar} >Editar</button>
         <button onClick={sair} >Sair</button>
         <div></div>
         <div></div>
         <div></div>
      </div>
   )
 
 }
 
export default UsuarioComum
 
