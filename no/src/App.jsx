import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/publica/home";
import About from "./pages/publica/about";
import BackEnd from "./pages/privada/backEnd";
import BaseDeDatos from "./pages/privada/baseDeDatos";
import LayoutPrivado from "./components/layout/layoutPrivado";
import LayoutPublica from "./components/layout/layoutPublica";
import Loader from "./components/loader";


export const rutasPublicas = [
  {ruta: "/", Conponente: Home},
  {ruta: "about", Conponente: About}
]
export const rutasPrivadas = [
  {ruta: "backEnd", Conponente: BackEnd},
  {ruta: "base-de-datos", Conponente: BaseDeDatos}
]

const App = () => {
  const location = useLocation();
  
  return (
    <>

      <Loader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

            <Route path="/" element={<LayoutPublica />} >
               
              {
                rutasPublicas.map((value, key) => {
                  const { ruta, Conponente } = value
                    return (
                      <Route key={key} path={ruta} element={<Conponente />} />
                    )
                })
              } 
            </Route>

            <Route path="dashboard" element={<LayoutPrivado />} >
               
              {
                rutasPrivadas.map((value, key) => {
                  const { ruta, Conponente } = value
                    return (
                      <Route key={key} path={ruta} element={<Conponente />} />
                    )
                })
              } 
            </Route>
          
        </Routes>
      </AnimatePresence>

      
      
    </>
  );
};
          
export default App
