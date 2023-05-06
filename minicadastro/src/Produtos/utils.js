
import React, { useState } from 'react'



const Utils = ({funcao}) => {
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

export default Utils
