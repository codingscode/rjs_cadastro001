import React from 'react'
import './Inicio.css'


const Inicio = () => {


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
         <input placeholder="senha" />
         <div>
            <span>Novo?</span><br />
            <button className='cadastrar' >Cadastrar</button>
         </div>
      </div>
   )

}

export default Inicio
