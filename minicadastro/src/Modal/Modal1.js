
import React from 'react'
import './Modal1.css'


const Modal1 = ({ mostrar, fechar }) => {
   
   if(!mostrar) {
      return null
   }

   return (
      <div className='modal' onClick={() => fechar()} >
         <div className='conteudomodal'  onClick={ (e) => e.stopPropagation() } >
            <div className='titulo' >
                <h4>Ação Necessária</h4>
            </div>
            <div className='conteudo' >
                <div>Deseja realmente apagar o usuário xxxx?</div>
                <div>sim</div>
                <div>não</div>
            </div>
            <div className='botao' >
                <button onClick={() => fechar()} >fechar</button>
            </div>
            
         </div>
      </div>
   )
}





export default Modal1
