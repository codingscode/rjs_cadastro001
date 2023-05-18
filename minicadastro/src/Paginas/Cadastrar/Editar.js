import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CadastrarPessoa } from '../../Produtos/utils'


//{"id": 1, "nome": "kyle", "sobrenome": "silva", "senha": "abc", "email": "kyle@gmail.com", "compras": [], "soma_total": 3600}

const Editar = () => {
   const [usuarioAtual, setUsuarioAtual] = useState({
      nome: '', sobrenome: '', senha: '', email: ''
   })

   const { state } = useLocation()

   console.log('usuario', state)

   const navigate = useNavigate()

   const imprimirAtual = (v, nome) => {
      setUsuarioAtual({...usuarioAtual, [nome]: v})
      console.log(usuarioAtual)
   }

   const alterar = (v) => {
      console.log('v: ', v)
   }


   const handleSubmit = (e) => {
      e.preventDefault()

      const nome = e.target.elements.nome.value
      const sobrenome = e.target.elements.sobrenome.value
      const email = e.target.elements.email.value
      const senha = e.target.elements.senha.value
      const pagamento = e.target.elements.pagamento.value
      const dados = { nome, sobrenome, email, senha, pagamento }
      alert(`nome: ${nome}\nsobrenome: ${sobrenome}\nemail: ${email}\nsenha: ${senha}\npagamento: ${pagamento}`)
      CadastrarPessoa(dados)
      navigate('/', { replace: true })
   }

//onChange={(e) => imprimirAtual(e.target.value, e.target.name)}

   return (
      <form onSubmit={handleSubmit} >
         <div>Cadastrar Usuário</div>
         <input id='nome' name="nome" placeholder='nome' value={state.nome} onChange={(e) => alterar(e.target)}/><br />
         <input id='sobrenome' name="sobrenome" placeholder='sobrenome' value={state.sobrenome} /><br />
         <input id='email' name="email" placeholder='email' value={state.email} /><br />
         <input id='senha' name="senha" placeholder='senha' value={state.senha} /><br />
         <div>
            selecionar produtos...
         </div>
         <div>
            <select id='pagamento' >
               <option>selecione</option>
               <option>boleto</option>
               <option>cartão</option>
            </select>
         </div>
         <button type='submit' >Finalizar</button>
      </form>
   )
 
}
 
export default Editar
 