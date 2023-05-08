import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'





const Inicio = ({}) => {

   const navegar = useNavigate()

   const paginaCadastrar = () => {
      navegar('/cadastrar', { replace: true })
   }

   return (
      <div className='base'>
         <div>
            <select  >
               <option>selecione</option>
               <option>Usuário Comum</option>
               <option>Usuário Administrador</option>
            </select>
         </div>
         <input placeholder="nome" /><br />
         <input placeholder="senha" /><br />
         <button>Entrar</button>
         <div>
            <span>Novo?</span><br />
            <button className='cadastrar' onClick={paginaCadastrar} >Cadastrar</button>
         </div>
      </div>
   )

}

export default Inicio
