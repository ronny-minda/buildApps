import { Link } from "react-router-dom"
import { rutasPublicas } from "../App"

const Header = () => {
return (
    <nav className="backdrop-blur bg-white bg-opacity-5 shadow w-full sticky top-0 left-0">
      {
        /*
          <div className="absolute right-0 bottom-0" id="consola">console.log: s</div>    
         */
      }
     
        <ul className="flex justify-center">

          {
            rutasPublicas.map((value, key) => {

              const { ruta } = value
              
              return (
                <li key={key} className="m-2">
                  <Link 
                    className="h-full w-full px-3 inline-block flex justify-center items-center relative rounded-[2px] text-sky-900 text-[14px] group" 
                    to={ruta}
                  >
                    {ruta == "/" ? "home" : ruta.charAt(0).toUpperCase() + ruta.slice(1).toLowerCase()}
                    <div className="transition-all h-[2px] w-0 group-hover:w-full bg-sky-900 absolute left-0 bottom-0"></div>
                  </Link> 
                </li>
              )
            })
          }
  
        </ul>
      </nav> 
 
  )

}

export default Header
