
import React, { useEffect, useState } from 'react'



export const Utils = ({funcao}) => {
   const [quantidade, setQuantidade] = useState(0)
   
   
   const alterar = (sinal, q) => {
       console.log(sinal)
       
       if (sinal === '+') {
          setQuantidade(q+1)
       }
       if (sinal === '-') {
          setQuantidade(q-1)
         }
         console.log('q', q+1)
         console.log('quantidade', quantidade+1)
         funcao(q)
         
      }

      return (
         <div >
          <div>Quantidade: {quantidade}</div>
          <button onClick={() => alterar("+", quantidade)}>+</button>
          <button onClick={() => alterar("-", quantidade)} >-</button>
          
        </div>
    )
    
   }
   
   export const ChamadaProdutos = async (f) => {
      await useEffect(() => {
         fetch(`http://192.168.1.13:3000/produtos`)
           .then(response => response.json())
             .then((data) => {
                console.log(data)
                f(data)  //setDados(data)
              })
              .catch((e) => {
                 console.error(`Um erro aconteceu: ${e}`)
              })
           }, [])
      
   }
   
export const ChamadaPessoas = async (f) => {
      //await useEffect(() => {
      await fetch(`http://192.168.1.13:3000/usuarios_comuns`)
      .then(response => response.json())
      .then((data) => {
         console.log(data)
         f(data)  //setDados(data)
      })
      .catch((e) => {
         console.error(`Um erro aconteceu: ${e}`)
      })
      //}, [])
   
}

export const CadastrarPessoa = async (jsonData) => {
   
   // Send data to the backend via POST
   await fetch('http://192.168.1.13:3000/usuarios_comuns', {  // Enter your IP address here
   method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      
   }).then(() => {
      console.log('enviado')
   })
   
}

export const ApagarPessoa = async (lista, nome) => {
   
   
   let pessoa = lista.filter(cada => cada.nome == nome)
   
   console.log('pessoa', pessoa)
   
   await fetch(`http://192.168.1.13:3000/usuarios_comuns/${pessoa[0].id}`, {
      method: 'DELETE', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pessoa)
   }).then((res) => res.json() )
   .then(() => {
      console.log('apagado')
   })
   
   
   
}



