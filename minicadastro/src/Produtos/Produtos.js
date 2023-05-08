
import React, { useEffect, useState } from 'react'
import './Produtos.css'
import { ChamadaProdutos, Utils } from './utils'

// http://localhost:3001/comprar



const Produtos = ({}) => {
      
   const [dados, setDados] = useState([])
   const [quant, setQuant] = useState(0)

   const [compraDados, setCompraDados] = useState(
      [
         {id: 1, nome: 'TV', preco: 1200, quantidade: 3, total: 3600, met_pagamento: 'cartão'}
      ]
   )

   
   ChamadaProdutos(setDados)

   /* useEffect(() => {
      fetch(`http://192.168.1.13:3000/produtos`)
        .then(response => response.json())
        .then((data) => {
           console.log(data)
           setDados(data)
        })
        .catch((e) => {
           console.error(`Um erro aconteceu: ${e}`)
        })
    }, []) */

   const noCarrinho = (id, n, p, q) => {
      setCompraDados([...compraDados, {id: id, nome: n, preco: p, quantidade: q, total: p*q, met_pagamento: 'cartão'}])
      console.log(n, p)
      console.log(compraDados)
   }

   const chamada = (v) => {
      return v
   }

 
   return (
      <div>
         <div>Comprar</div>
         {(dados).map((cada, i) => {
            return (
               <div key={i} >
                  <img className='imagem' src={cada.imagem} />
                  <div>{cada.nome}</div>
                  <div>Preço: R$ {cada.preco}</div>
                  <Utils funcao={(e) => setQuant(e+1)} />
                  <button onClick={() => noCarrinho(cada.id, cada.nome, cada.preco, quant)} >comprar</button>
                  
               </div>
            )
         })}
         <button>Finalizar</button>
         
      </div>
   )
}

export default Produtos
