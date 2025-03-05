import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import WhatsAppButton from '../components/popup';

const cemeteryUnits = [
        {
          id: 'campo-grande',
          name: 'Unidade Campo Grande',
          location: 'Campo Grande, Rio de Janeiro',
          phone: '(21) 9999-4444',
          description: 'Ambiente acolhedor com fácil acesso e estacionamento.',
          image: 'https://i.ibb.co/yct9J3Vb/campo-grande.webp',
        },
        {
          id: 'cacuia',
          name: 'Unidade Cacuia',
          location: 'Cacuia, Rio de Janeiro',
          phone: '(21) 9999-3333',
          description: 'Nossa unidade de Cacuia oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/9kZRVC24/cacuia.webp',
        },
        {
          id: 'iraja',
          name: 'Unidade Irajá',
          location: 'Irajá, Rio de Janeiro',
          phone: '(21) 9999-2222',
          description: 'Nossa unidade de Irajá está localizada em uma região de fácil acesso.',
          image: 'https://i.ibb.co/TxThStMZ/iraja.webp',
        },
        {
          id: 'guaratiba',
          name: 'Unidade Guaratiba',
          location: 'Guaratiba, Rio de Janeiro',
          phone: '(21) 9999-1111',
          description: 'Nossa unidade de Guaratiba oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/WWVGrS6s/guaratiba.webp',
        },
        {
          id: 'caju',
          name: 'Unidade Caju',
          location: 'Caju, Rio de Janeiro',
          phone: '(21) 9999-0000',
          description: 'Nossa unidade de Caju está situada em uma localização privilegiada.',
          image: 'https://i.ibb.co/ynkTybc7/caju.webp',
        },
        {
          id: 'inhauma',
          name: 'Unidade Inhaúma',
          location: 'Inhaúma, Rio de Janeiro',
          phone: '(21) 9999-9999',
          description: 'Nossa unidade de Inhaúma oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/qFySY1qW/inhauma.webp',
        },
        {
          id: 'jardim-da-saudade-panciencia',
          name: 'Jardim da Saudade (Paciência)',
          location: 'Paciência, Rio de Janeiro',
          phone: '(21) 9999-8888',
          description: 'Nossa unidade Jardim da Saudade em Paciência oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/fYBb9HHL/saudade-paciencia.webp',
        },
        {
          id: 'jardim-da-saudade-sulacap',
          name: 'Jardim da Saudade (Sulacap)',
          location: 'Sulacap, Rio de Janeiro',
          phone: '(21) 9999-7777',
          description: 'Nossa unidade Jardim da Saudade em Sulacap oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/N2qYT6kH/sulacap.webp',
        },
        {
          id: 'memorial-do-carmo',
          name: 'Memorial do Carmo',
          location: 'Carmo, Rio de Janeiro',
          phone: '(21) 9999-6666',
          description: 'Nossa unidade Memorial do Carmo oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/hx6Mfrf1/memorial-carmo.webp',
        },
        {
          id: 'memorial-do-rio',
          name: 'Memorial do Rio',
          location: 'Rio de Janeiro, RJ',
          phone: '(21) 9999-5555',
          description: 'Nossa unidade Memorial do Rio oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/MxqgzKws/memorial-do-rio.webp',
        },
        {
          id: 'murundu-realgengo',
          name: 'Murundu Realengo',
          location: 'Realengo, Rio de Janeiro',
          phone: '(21) 9999-4444',
          description: 'Nossa unidade Murundu Realengo oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/Z62PXKs0/murundu-realengo.webp',
        },
        {
          id: 'paqueta',
          name: 'Unidade Paquetá',
          location: 'Paquetá, Rio de Janeiro',
          phone: '(21) 9999-3333',
          description: 'Nossa unidade de Paquetá oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/3mNDP2HV/paqueta.webp',
        },
        {
          id: 'piabas-recreio',
          name: 'Unidade Piabas (Recreio)',
          location: 'Recreio, Rio de Janeiro',
          phone: '(21) 9999-2222',
          description: 'Nossa unidade de Piabas no Recreio oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/0jJMjfw1/penitencia.webp',
        },
        {
          id: 'ricardo-albuquerque',
          name: 'Unidade Ricardo de Albuquerque',
          location: 'Ricardo de Albuquerque, Rio de Janeiro',
          phone: '(21) 9999-1111',
          description: 'Nossa unidade de Ricardo de Albuquerque oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/xqdW07Kj/cemiterio-ricardo-albuquerque.webp',
        },
        {
          id: 'santa-cruz',
          name: 'Unidade Santa Cruz',
          location: 'Santa Cruz, Rio de Janeiro',
          phone: '(21) 9999-0000',
          description: 'Nossa unidade de Santa Cruz oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/20PGswM1/santa-cruz.webp',
        },
        {
          id: 'sao-joao-batista',
          name: 'Unidade São João Batista',
          location: 'São João Batista, Rio de Janeiro',
          phone: '(21) 9999-9999',
          description: 'Nossa unidade de São João Batista oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/rRp9QL14/sao-joao-batista.webp',
        },
        {
          id: 'istaelita',
          name: 'Unidade Israelita',
          location: 'Rio de Janeiro, RJ',
          phone: '(21) 9999-8888',
          description: 'Nossa unidade Israelita oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/zHsfvCNx/israelita.webp',
        },
        {
          id: 'penitencia',
          name: 'Unidade Penitência',
          location: 'Penitência, Rio de Janeiro',
          phone: '(21) 9999-7777',
          description: 'Nossa unidade de Penitência oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/0jJMjfw1/penitencia.webp',
        },
        {
          id: 'sao-francisco-de-paula-catumbi',
          name: 'São Francisco de Paula (Catumbi)',
          location: 'Catumbi, Rio de Janeiro',
          phone: '(21) 9999-6666',
          description: 'Nossa unidade de São Francisco de Paula no Catumbi oferece um ambiente sereno e acolhedor.',
          image: 'https://i.ibb.co/QFbwBtbB/catumbi.webp',
        },
        {
          id: 'british-burial-fund',
          name: 'British Burial Fund (Cemitério dos Ingleses)',
          location: 'Rio de Janeiro, RJ',
          phone: '(21) 9999-5555',
          description: 'Nossa unidade British Burial Fund oferece um ambiente tranquilo e acolhedor.',
          image: 'https://i.ibb.co/Y4bH3wQW/ingleses.webp',
        },
      ];

const CemeteryUnits = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">
          Unidades de Cemitérios
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Nossas unidades de cemitérios estão estrategicamente localizadas para melhor
          atender você e sua família neste momento delicado.
        </p>
            <WhatsAppButton/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cemeteryUnits.map((unit, index) => (
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
                  to={`/cemetery-units/${unit.id}`}
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

export default CemeteryUnits;