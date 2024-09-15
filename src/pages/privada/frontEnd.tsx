import { motion } from "framer-motion";

const FrontEnd = () => {

  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
    >
      FrontEnd
    </motion.div>
  )
}

export default FrontEnd
