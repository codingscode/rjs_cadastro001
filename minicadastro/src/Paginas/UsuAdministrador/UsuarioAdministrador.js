import React, { useEffect, useState } from "react"
import { ChamadaPessoas, ApagarPessoa } from '../../Produtos/utils'
import './UsuarioAdministrador.css'


const UsuarioAdministrador = () => {
   const [usuarios, setUsuarios] = useState([])

      
   useEffect(() => {
      ChamadaPessoas(setUsuarios)

   }, [])
   
   const apagar = (lista, quem) => {
      let novalista = lista.filter((cada) => cada.nome !== quem)
      
      ApagarPessoa(lista, quem)
      
      setUsuarios([...novalista])
   }

   return (
      <div>
         <div className="uacabecalho" >Usuario Administrador</div>
         <div>
           <div className="uctitulo" >Lista de Usuários Comuns</div>
           {usuarios.length ? usuarios.map((cada, i) => {
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
            }) : 'Não há usuários cadastrados.'}
         </div>
      </div>
   )
 
}
 
 export default UsuarioAdministrador
 
 
 
 
 
 