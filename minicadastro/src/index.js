
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import App from './App'
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastrar from './Paginas/Cadastrar/Cadastrar'
import ElementoErro from './erro-pagina'
import Produtos from './Produtos/Produtos'
import UsuarioAdministrador from './Paginas/UsuAdministrador/UsuarioAdministrador'
import UsuarioComum from './Paginas/UsuComum/UsuarioComum'
import Editar from './Paginas/Cadastrar/Editar'


const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <ElementoErro />,
      children: [
         {
           path: 'cadastrar',
           element: <Cadastrar />,
         },
         {
           path: '/administrador',
           element: <UsuarioAdministrador />,
         },
         {
           path: '/ucomum',
           element: <UsuarioComum />,
         },
         {
           path: '/editar',
           element: <Editar />,
         },

       ],
   
   },
   {
      path: '/comprar',
      element: <Produtos />
   }
   
   
   
]);



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

