
import React, { useEffect, useState } from 'react'



// http://localhost:3001/comprar



const Produtos = () => {
      
   const [dados, setDados] = useState([])
   

   useEffect(() => {
      fetch(`http://192.168.1.13:3000/produtos`)
        .then(response => response.json())
        .then((data) => {
          console.log('*', data)
          setDados(data)
        })
        .catch((e) => {
          console.error(`Um erro aconteceu: ${e}`)
        })
    }, [])

 
   return (
      <div>
         {(dados).map((cada, i) => {
            return (
               <div key={i} >{cada.nome}</div>
            )
         })}
      </div>
   )
}

export default Produtos
