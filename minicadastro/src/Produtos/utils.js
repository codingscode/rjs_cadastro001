import React, { useState } from 'react'



const Utils = () => {
    const [quantidade, setQuantidade] = useState(0)

    const alterar = (sinal) => {
       console.log(sinal)
       if (sinal === '+') {
          setQuantidade(quantidade+1)
       }
       if (sinal === '-') {
          setQuantidade(quantidade-1)
       }
        
    }

    return (
        <div>
          <div>Quantidade: {quantidade}</div>
          <button onClick={() => alterar("+")}>+</button>
          <button onClick={() => alterar("-")} >-</button>
        </div>
    )

}

export default Utils
