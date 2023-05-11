import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChamadaPessoas } from '../../Produtos/utils'
import './Inicio.css'





const Inicio = ({}) => {
   const [ucomuns, setUcomuns] = useState([])

   useEffect(() => {
      ChamadaPessoas(setUcomuns)
   }, [])

   //console.log('*ucomuns', ucomuns)

   const navegar = useNavigate()

   const entrar = (e) => {
      e.preventDefault()

      const nome = e.target.elements.nome.value
      const senha = e.target.elements.senha.value
      const tipousario = e.target.elements.tusuario.value
      console.log(nome, senha, tipousario)

      if (tipousario == 'Usuário Administrador') {
         navegar('/administrador', { replace: true })
      }
      if (tipousario == 'Usuário Comum') {
         let presente = ucomuns.filter((cada) => (nome == cada.nome) & (senha == cada.senha))
         console.log('existe?', presente)

         if(presente.length) {
            navegar('/ucomum', { state: presente[0], replace: true })
            console.log('presente', presente)
         }
         else {
            alert('usuario inexistente') 

         }

      }
   }

   const paginaCadastrar = () => {
      navegar('/cadastrar', { replace: true })
   }

   return (
      <form className='base' onSubmit={entrar} >
         <div>
            <select id='tusuario' name='tusuario' >
               <option>selecione</option>
               <option>Usuário Comum</option>
               <option>Usuário Administrador</option>
            </select>
         </div>
         <input id='nome' name='nome' placeholder="nome" /><br />
         <input id='senha' name='senha' placeholder="senha" /><br />
         <button type='submit' >Entrar</button>
         <div>
            <span>Novo?</span><br />
            <button className='cadastrar' onClick={paginaCadastrar} >Cadastrar</button>
         </div>
      </form>
   )

}

export default Inicio
