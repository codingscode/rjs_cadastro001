import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChamadaPessoas, EAdministrador } from '../../Produtos/utils'
import './Inicio.css'





const Inicio = ({}) => {
   const [ucomuns, setUcomuns] = useState([])
   const [eadmin, setEadmin] = useState(false)

   useEffect(() => {
      ChamadaPessoas(setUcomuns)
      Verificar()
   }, [])

   
   const navegar = useNavigate()

   const Verificar = (valor = false) => {
      
      setEadmin(valor)
      
      
   }

   const Entrar = (e) => {
      e.preventDefault()

      //let administrador = false
      const nome = e.target.elements.nome.value
      const senha = e.target.elements.senha.value
      const tipousario = e.target.elements.tusuario.value
      
      
      //EAdministrador(nome, senha)
      EAdministrador(nome, senha, setEadmin)
      console.log('EAdministrador', EAdministrador(nome, senha, Verificar))
      console.log('valor eadmin', eadmin)
      
      if (tipousario == 'Usuário Administrador') {

         if(eadmin) {
            console.log('é administrador?', eadmin)
            navegar('/administrador', { replace: true })
         }
         else {
            alert('você não é administrador')
         }
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
      <form className='base' onSubmit={Entrar} >
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
