import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const UsuarioComum = () => {
   const [uatual, setUatual] = useState({})
   const { state } = useLocation()
  
   useEffect(() => {
      setUatual({...state})
   }, [])
  

   return (
      <div>
         <div>Usuário</div>
         <div>Nome: {uatual.nome}</div>
         <div>sobrenome: {uatual.sobrenome}</div>
         <div>Email: {uatual.email}</div>
         <div>Senha: {uatual.senha}</div>
         <div>Pagamento: {uatual.pagamento}</div>
         <button>Sair</button>
         <div></div>
         <div></div>
         <div></div>
      </div>
   )
 
 }
 
export default UsuarioComum
 
