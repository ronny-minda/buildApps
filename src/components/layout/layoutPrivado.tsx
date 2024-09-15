import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import useAnimationPage from "../../hooks/useAnimationPage"
import AsideDashboard from "../asideDashboard"
import HeaderDashboard from "../headerDashboard"

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

const LayoutPrivado = () => {

  const rutasLayoutAnimation = [
    "/dashboard/frontEnd",
    "/dashboard/backEnd",
    "/dashboard/dataBase",
    "/dashboard/build",
  ]
  const animationPage = useAnimationPage(rutasLayoutAnimation)

  return (
    <motion.div 
      {...animationPage}
      className="flex min-h- w-full flex-col bg-muted/40"
      style={{height: "100dvh"}}
    >
      
      <AsideDashboard />

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen">
       
        <HeaderDashboard />

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start w-[100%] flex-1">
            <div style={{height: "calc(100dvh - 85px)"}} className="flex-1 overflow-y-auto shadow-inner p-3">
              <Outlet />
            </div>
            
          </div>

        </main>
      </div>
    </motion.div>
  )
}

export default LayoutPrivado
