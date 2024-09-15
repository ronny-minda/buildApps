import { motion } from "framer-motion";

const BackEnd = () => {

  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
    >
      BACKEND
    </motion.div>
  )
}

export default BackEnd
