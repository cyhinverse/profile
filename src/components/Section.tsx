import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="mb-6"
  >
    {children}
  </motion.div>
);

export default Section;