import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import useAnimationPage from "../../hooks/useAnimationPage"
import Header from "../header"
import Footer from "../footer"
// import FondoAnimado from "./fondoAnimado"

const Layout = () => {

  const rutasLayoutAnimation = [
    "/",
    "/about",
    "/projects",
    "/blog",
    "/login",
    "/register",
  ]

  const animationPage = useAnimationPage(rutasLayoutAnimation)


  return (
    <motion.div
      { ...animationPage }

      className=""
    >
      <Header /> 
      <main> 
        <Outlet />  
      </main>

      <Footer />
    </motion.div>
  )
}

export default Layout
