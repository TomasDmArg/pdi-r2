import { motion } from "framer-motion";

interface AnimateViewProps extends React.ComponentProps<"div"> {}

/**
 * Wrapper component that adds while in view animations
 */
export const AnimateView = ({ children }: AnimateViewProps) => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {children}
        </motion.section>
    )
}