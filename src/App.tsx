import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/publica/home";
import About from "./pages/publica/about";
import BackEnd from "./pages/privada/backEnd";
import BaseDeDatos from "./pages/privada/baseDeDatos";
import LayoutPrivado from "./components/layout/layoutPrivado";
import LayoutPublica from "./components/layout/layoutPublica";
// import Loader from "./components/loader";
import Projects from "./pages/publica/projects";
import Blog from "./pages/publica/blog";
import Login from "./pages/publica/login";
import Register from "./pages/publica/register";
import Build from "./pages/privada/build";
import FrontEnd from "./pages/privada/frontEnd";
import { Bolt, Database, FileCode, FileJson, Home as IcoHome } from "lucide-react";
import HomeDashboard from "./pages/privada/homeDashboard";


export const rutasPublicas = [
  {ruta: "/", Conponente: Home},
  {ruta: "about", Conponente: About},
  {ruta: "projects", Conponente: Projects},
  {ruta: "blog", Conponente: Blog},
  {ruta: "login", Conponente: Login},
  {ruta: "register", Conponente: Register},
]

export const rutasPrivadas = [
  {ruta: "", Conponente: HomeDashboard, Icono: IcoHome},
  {ruta: "frontEnd", Conponente: FrontEnd, Icono: FileCode},
  {ruta: "backEnd", Conponente: BackEnd, Icono: FileJson},
  {ruta: "dataBase", Conponente: BaseDeDatos, Icono: Database},
  {ruta: "build", Conponente: Build, Icono: Bolt},
]

const App = () => {
  const location = useLocation();
  
  return (
    <>

      {
        /*
        <Loader />
        */
      }
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
                
                    if(ruta == "") return <Route key={key} index element={<Conponente />} /> 

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
