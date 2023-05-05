
//import './App.css'

import './root.css'
import Inicio from '../Paginas/Inicio/Inicio'
import { Outlet, Link } from 'react-router-dom'



const Root = () => {
   const rotas = [
      '', 'cadastrar', 'usuario_comum', 'usuario_administrador'
   ]


   return (
      <div>
         <div id="sidebar">
           {/* other elements */}
   
           <nav>
             <ul>
               <li>
                 <Link to={`contacts/1`}>Your Name</Link>
               </li>
               <li>
                 <Link to={`contacts/2`}>Your Friend</Link>
               </li>
             </ul>
           </nav>
   
           {/* other elements */}
         </div>
         <div className='cabecalho'>
            <div>Cadastro</div>
            <Inicio />
            <Outlet />
         </div>
      </div>
   )
}

export default Root

