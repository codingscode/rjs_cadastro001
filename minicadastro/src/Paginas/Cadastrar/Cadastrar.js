import React, { useState } from 'react'





const Cadastrar = () => {
   const [usuarioAtual, setUsuarioAtual] = useState({
      nome: '', sobrenome: '', senha: '', email: ''
   })

   const imprimirAtual = (v, nome) => {
      setUsuarioAtual({...usuarioAtual, [nome]: v})
      console.log(usuarioAtual)
   }

   return (
      <div>
         <div>Cadastrar Usuário</div>
         <input name="nome" placeholder='nome' onChange={(e) => imprimirAtual(e.target.value, e.target.name)} /><br />
         <input name="sobrenome" placeholder='sobrenome' onChange={(e) => imprimirAtual(e.target.value, e.target.name)} /><br />
         <input name="senha" placeholder='senha' onChange={(e) => imprimirAtual(e.target.value, e.target.name)} /><br />
         <input name="email" placeholder='email' onChange={(e) => imprimirAtual(e.target.value, e.target.name)} /><br />
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
 