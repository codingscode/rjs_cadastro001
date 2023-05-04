
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import App from './App'
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastrar from './Paginas/Cadastrar/Cadastrar'
import ElementoErro from './erro-pagina'


const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <ElementoErro />
   },
   /* {
      path: '/cadastrar',
      element: <Cadastrar />,
   }, */
]);



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

