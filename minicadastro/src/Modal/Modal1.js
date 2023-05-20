
import React from 'react'
import './Modal1.css'


const Modal1 = ({ mostrar, fechar }) => {
   
   if(!mostrar) {
      return null
   }

   return (
      <div className='modal' >
         <div>
            <div>
                <h4>titulo</h4>
            </div>
            <div>
                conteudo
            </div>
            <div>
                <button onClick={() => fechar()} >fechar</button>
            </div>
            
         </div>
      </div>
   )
}





export default Modal1
