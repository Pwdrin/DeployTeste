import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[70vh] flex items-center justify-center"
    >
      <div className="container-custom py-16 text-center">
        <h1 className="text-6xl font-serif font-bold text-primary-800 mb-6">404</h1>
        <h2 className="text-3xl font-serif font-bold text-primary-700 mb-6">Página não encontrada</h2>
        <p className="text-primary-600 mb-8 max-w-lg mx-auto">
          A página que você está procurando não existe ou foi removida.
          Por favor, verifique o endereço ou retorne à página inicial.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" />
          Voltar para a página inicial
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;