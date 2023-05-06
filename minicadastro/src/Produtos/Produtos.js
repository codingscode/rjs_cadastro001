
import React, { useEffect, useState } from 'react'
import './Produtos.css'
import Utils from './utils'

// http://localhost:3001/comprar



const Produtos = ({}) => {
      
   const [dados, setDados] = useState([])
   const [compraDados, setCompraDados] = useState({
      compras: [
         {"id": 1, "nome": "TV", "preco": 1200, "quantidade": 3, "total": 3600, "met_pagamento": "cartão"}
      ],
      soma_total: 0
   })
   


   useEffect(() => {
      fetch(`http://192.168.1.13:3000/produtos`)
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          setDados(data)
        })
        .catch((e) => {
          console.error(`Um erro aconteceu: ${e}`)
        })
    }, [])

   const noCarrinho = (n, p) => {
      console.log(n, p)
      let total = n*p
      setCompraDados(...compraDados, compraDados.compras.push({}))
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
                  <Utils />
                  <button onClick={() => noCarrinho(cada.nome, cada.preco)} >comprar</button>
                  
               </div>
            )
         })}
         <button>Finalizar</button>
      </div>
   )
}

export default Produtos
