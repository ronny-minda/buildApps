import { motion } from "framer-motion"
import Hero from "../../components/hero"

const Home = () => {
  
  return (
    <>
      <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
      >
        <Hero/> 
      </motion.h1>
    </>
  )
}

export default Home
