import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  imageUrl,
  delay = 0,
}) => {
  return (
    <motion.div
      className="card group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div 
        className="h-48 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-primary-100 text-primary-700">
            {icon}
          </div>
          <h3 className="ml-3 text-xl font-serif font-bold text-primary-800">{title}</h3>
        </div>
        <p className="text-primary-600 mb-6">{description}</p>
        <Link
          to={`/servicos/${id}`}
          className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
        >
          Saiba mais
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;