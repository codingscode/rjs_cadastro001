
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
   const error = useRouteError()
   console.error(error)
 
   return (
     <div id="error-page">
       <h1>Opa!</h1>
       <p>Desculpa, um erro inesperado ocorreu.</p>
       <p>
         <i>{error.statusText || error.message}</i>
       </p>
     </div>
   )
}

export default ErrorPage
