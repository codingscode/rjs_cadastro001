
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

export const ChamadaProdutos = (f) => {
   useEffect(() => {
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

export const ChamadaPessoas = (f) => {
   useEffect(() => {
      fetch(`http://192.168.1.13:3000/usuarios_comuns`)
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



//export default chamadaProdutos
