import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  service,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Quote className="h-8 w-8 text-primary-300 mb-4" />
      <p className="text-primary-700 italic mb-6">{quote}</p>
      <div>
        <p className="font-medium text-primary-800">{author}</p>
        <p className="text-sm text-primary-500">{service}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;