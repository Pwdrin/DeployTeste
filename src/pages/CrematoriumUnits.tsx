import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import WhatsAppButton from '../components/popup';

const crematoriums = [
  {
    id: 'caju',
    name: 'Crematório do Caju',
    location: 'R. Carlos Seidl, 1281 – Caju, Rio de Janeiro',
    phone: '(21) 9999-8888',
    description: 'Moderno crematório com instalações completas e ambiente acolhedor.',
    image: 'https://i.ibb.co/Z6nxH6Xd/caju.jpg',
  },
  {
    id: 'catumbi',
    name: 'Crematório do Catumbi',
    location: 'R. de Catumbi, 120 – Catumbi, Rio de Janeiro',
    phone: '(21) 9999-7777',
    description: 'Amplo espaço com jardins contemplativos e capela para cerimônias.',
    image: 'https://i.ibb.co/xK20NR99/crematorio-catumbi.jpg',
  },
  {
    id: 'sulacap',
    name: 'Crematório Sulacap',
    location: 'Av. Carlos Pontes, 500 Jardim Sulacap, Rio de Janeiro',
    phone: '(21) 9999-6666',
    description: 'Crematório com vista para o mar e estrutura completa para familiares.',
    image: 'https://i.ibb.co/KzRkvMPJ/sulacap.jpg',
  },
  {
    id: 'carmo',
    name: 'Memorial do Carmo',
    location: 'Rua Monsenhor Manoel Gomes, 287 Caju, Rio de Janeiro',
    phone: '(21) 9999-6666',
    description: 'Crematório com vista para o mar e estrutura completa para familiares.',
    image: 'https://i.ibb.co/HDr78fwQ/carmo.jpg',
  },
  {
    id: 'penitencia',
    name: 'Crematório Penitência',
    location: 'R. Monsenhor Manuel Gomes, 307 Rio de Janeiro',
    phone: '(21) 9999-6666',
    description: 'Crematório com vista para o mar e estrutura completa para familiares.',
    image: 'https://i.ibb.co/Kx9dZML3/penitencia.jpg',
  },
  {
    id: 'memorial-rio',
    name: 'Memorial Rio',
    location: 'R. Francisco de Souza e Melo, 102 Cordovil Rio de Janeiro',
    phone: '(21) 9999-6666',
    description: 'Crematório com vista para o mar e estrutura completa para familiares.',
    image: 'https://i.ibb.co/YB9TTxxp/memorialrio.jpg',
  },
  {
    id: 'joao-batista',
    name: 'São João Batista',
    location: 'Rua da Matriz, 754 – Centro, São João de Meriti, Rio de Janeiro',
    phone: '(21) 9999-6666',
    description: 'Crematório com vista para o mar e estrutura completa para familiares.',
    image: 'https://i.ibb.co/MkXw6vty/batista.jpg',
  },
];

const CrematoriumUnits = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">
          Unidades de Crematório
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Conheça nossas unidades de crematório, todas equipadas com tecnologia moderna
          e preparadas para oferecer um serviço digno e respeitoso.
        </p>
        <WhatsAppButton/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crematoriums.map((crematorium, index) => (
            <motion.div
              key={crematorium.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${crematorium.image})` }}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{crematorium.name}</h2>
                <p className="text-gray-600 mb-4">{crematorium.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{crematorium.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={18} className="mr-2" />
                    <span>{crematorium.phone}</span>
                  </div>
                </div>
                <Link
                  to={`/crematorium-units/${crematorium.id}`}
                  className="block text-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Ver Detalhes
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrematoriumUnits;