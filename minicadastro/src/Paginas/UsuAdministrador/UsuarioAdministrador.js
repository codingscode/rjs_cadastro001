import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChamadaPessoas, ApagarPessoa } from '../../Produtos/utils'
import './UsuarioAdministrador.css'


const UsuarioAdministrador = () => {
   const [usuarios, setUsuarios] = useState([])

   const navegar = useNavigate()
      
   useEffect(() => {
      ChamadaPessoas(setUsuarios)

   }, [])
   
   const apagar = (lista, quem) => {
      let novalista = lista.filter((cada) => cada.nome !== quem)
      
      ApagarPessoa(lista, quem)
      
      setUsuarios([...novalista])
   }

   const sair = () => {
      navegar('/', { replace: true })
   }

   return (
      <div>
         <div className="uacabecalho" >Usuario Administrador</div>
         <div>
           <div className="uctitulo" >Lista de Usuários Comuns</div>
           <div>
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
               }) : <div className='aviso' >Não há usuários cadastrados.</div>}
              <button onClick={sair} >Sair</button>
           </div>
         </div>
      </div>
   )
 
}
 
 export default UsuarioAdministrador
 
 
 
 
 
 