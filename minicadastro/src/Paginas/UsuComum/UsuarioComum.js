import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const UsuarioComum = () => {
   const [uatual, setUatual] = useState({})
   const { state } = useLocation()
   
   console.log(state)
   
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
 
/* 
 {
      "id": 1,
      "nome": "kyle",
      "sobrenome": "silva",
      "senha": "abc",
      "email": "kyle@gmail.com",
      "compras": [],
      "pagamento": "cartão",
      "soma_total": 3600
 }
 
 */
 