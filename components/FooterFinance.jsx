import { motion } from "framer-motion";

const FooterFinance = () => {
    return (
        <>
            <motion.footer
                className="bg-[#0B2545] text-white text-center py-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p>© {new Date().getFullYear()} TWBFinance. All rights reserved.</p>
            </motion.footer>
        </>
    )
}

export default FooterFinance