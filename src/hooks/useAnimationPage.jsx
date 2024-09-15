import { useEffect, useState } from "react";

const useAnimationPage = (posiblesRutas) => {

    const [ boo, setBoo ] = useState(false)

    useEffect( () => {
      const handleUrlChange = () => {

      const arrayLocalStorage = JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "" ]
      const rutaActual = window.location.pathname
 
      if ( arrayLocalStorage[0] != rutaActual ) { 
        arrayLocalStorage[1] = arrayLocalStorage[0]
        arrayLocalStorage[0] = rutaActual
      }

      localStorage.setItem('arrayRutas', JSON.stringify(arrayLocalStorage));

      // console.log("layout: "+rutaActual)
      setBoo(!boo)
    }; 

      window.addEventListener('urlchange', handleUrlChange);
    
      return () => {
        window.removeEventListener('urlchange', handleUrlChange);
      };

    }, [])

    //console.log(`win: ${window.location.pathname}`)
    //console.log(posiblesRutas)
    //console.log(`(JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "0" ])[1]: ${(JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "0" ])[1]}`)
    //console.log( (JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "0" ])[1].includes(namePage)) 
  
    const rutaAnterior = (JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "0" ])[1]
    const rutaActual = (JSON.parse(localStorage.getItem('arrayRutas')) || [ "1", "0" ])[0]

    return {
      initial: { opacity: posiblesRutas.some( value => value == rutaAnterior) ? 1 : 0 },
      animate: { opacity: 1 },
      exit: { opacity: posiblesRutas.some( value => value == rutaActual) ? 1 : 0 },
      transition: { duration: 1 }
    }
    
  }

export default useAnimationPage
