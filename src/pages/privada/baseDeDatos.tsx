import { motion } from "framer-motion";

const BaseDeDatos = () => {

  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
    >
      BASE DE DATOS
    </motion.div>
  )
}

export default BaseDeDatos
