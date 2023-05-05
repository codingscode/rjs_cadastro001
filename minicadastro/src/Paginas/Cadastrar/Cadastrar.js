import React from 'react'





const Cadastrar = () => {




   return (
      <div>
         <div>Cadastrar Usuário</div>
         <input  placeholder='nome' /><br />
         <input  placeholder='sobrenome' /><br />
         <input  placeholder='senha' /><br />
         <input  placeholder='email' /><br />
         <div>
            selecionar produtos...
         </div>
         <div>
            <select>
               <option>selecione</option>
               <option>boleto</option>
               <option>cartão</option>
            </select>
         </div>
         <button>Finalizar</button>
      </div>
   )
 
}
 
export default Cadastrar
 