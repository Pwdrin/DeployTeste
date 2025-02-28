import React from 'react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="p-3 rounded-full bg-primary-100 text-primary-700 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-primary-600">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;