import { H2, P } from "../ui/typographies"
import { motion } from "framer-motion"

export const CompletedScreen = ()=> {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <H2>Bienvenido a mi app! 🥳</H2>
            <P>Completaste el formulario con éxito!</P>
        </motion.section>
    )
}