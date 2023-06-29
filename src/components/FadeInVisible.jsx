'use client';

import { motion } from 'framer-motion';


export default function FadeInVisible({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}