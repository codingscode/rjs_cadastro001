import React, { useState } from 'react'



const UsuarioComum = () => {
   
   const [uatual, setUatual] = useState({
      id: 1,
      nome: 'kyle',
      sobrenome: 'silva',
      senha: 'abc',
      email: 'kyle@gmail.com',
      compras: [],
      pagamento: 'cartão',
      soma_total: 3600
   })
   
   



   return (
      <div>
         <div>Usuário</div>
         <div>Nome: {uatual.nome}</div>
         <div>sobrenome: {uatual.sobrenome}</div>
         <div>Email: {uatual.email}</div>
         <div>Senha: {uatual.senha}</div>
         <div>Pagamento: {uatual.pagamento}</div>
         <div></div>
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
 