import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import WhatsAppButton from '../components/popup';

const funeralUnits = [
  {
    id: 'tijuca',
    name: 'Funerária Tijuca',
    location: 'Tijuca, Rio de Janeiro',
    phone: '(21) 9999-5555',
    description: 'Nossa Funerária principal no coração do Rio de Janeiro.',
    image: 'https://i.ibb.co/N62rF4rV/TIJUCA.jpg',
  },
  {
    id: 'barra-tijuca',
    name: 'Funerária Barra da Tijuca',
    location: 'Barra da Tijuca, Rio de Janeiro',
    phone: '(21) 9999-4444',
    description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
    image: 'https://i.ibb.co/mrCJbCYf/barratijuca.jpg',
  },
  {
    id: 'botafogo',
    name: 'Funerária Botafogo',
    location: 'Botafogo, Rio de Janeiro',
    phone: '(21) 9999-3333',
    description: 'Moderna Funerária com vista para a Baía de Guanabara.',
    image: 'https://i.ibb.co/5gh7dvRF/Botafogo-RJ.jpg',
  },
  {
    id: 'copacabana',
    name: 'Funerária Copacabana',
    location: 'Copacabana, Rio de Janeiro',
    phone: '(21) 9999-4444',
    description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
    image: 'https://i.ibb.co/KxQYPM75/copaca.jpg',
  },
  {
    id: 'campo-grande',
    name: 'Funerária Campo Grande',
    location: 'Campo Grande, Rio de Janeiro',
    phone: '(21) 9999-4444',
    description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
    image: 'https://i.ibb.co/hJPLgTKw/Campo-Grande-RJ.jpg',
  },
  {
    id: 'santa-cruz',
    name: 'Funerária Santa Cruz',
    location: 'Santa Cruz, Rio de Janeiro',
    phone: '(21) 9999-4444',
    description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
    image: 'https://i.ibb.co/KzfTBmDn/santacruz.jpg',
  },
  {
    id: 'jacarepagua',
    name: 'Funerária Jacarépagua',
    location: 'Jacarépagua, Rio de Janeiro',
    phone: '(21) 9999-4444',
    description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
    image: 'https://i.ibb.co/wrc3x3Sj/Jacarepagua.jpg',
  },
];

const FuneralUnits = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">
          Unidades Funerárias
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Nossas unidades funerárias estão estrategicamente localizadas para melhor
          atender você e sua família neste momento delicado.
        </p>

        <WhatsAppButton/>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funeralUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${unit.image})` }}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{unit.name}</h2>
                <p className="text-gray-600 mb-4">{unit.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{unit.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={18} className="mr-2" />
                    <span>{unit.phone}</span>
                  </div>
                </div>
                <Link
                  to={`/funeral-units/${unit.id}`}
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

export default FuneralUnits;