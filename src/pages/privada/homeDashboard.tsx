import { motion } from "framer-motion";

const HomeDashboard = () => {

  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
    >
      HomeDashboard
    </motion.div>
  )
}

export default HomeDashboard
