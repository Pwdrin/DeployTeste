import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft } from 'lucide-react';

const cemeteryUnits = {
  'campo-grande': {
    name: 'Cemitério de Campo Grande',
    location: 'Campo Grande, Rio de Janeiro',
    phone: '(21) 9999-4444',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Campo Grande está situada em uma localização privilegiada e de fácil acesso. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/hJPLgTKw/Campo-Grande-RJ.jpg',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
      'Manobrista 24h',
    ],
  },
  'cacuia': {
    name: 'Cemitério de Cacuia',
    location: 'Cacuia, Rio de Janeiro',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Cacuia oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/9kZRVC24/cacuia.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'iraja': {
    name: 'Cemitério de Irajá',
    location: 'Irajá, Rio de Janeiro',
    phone: '(21) 9999-2222',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério de Irajá está localizada em uma região de fácil acesso. Oferecemos:

    • Três salas para velório
    • Sala de repouso familiar
    • Estacionamento próprio
    • Cafeteria`,
    image: 'https://i.ibb.co/TxThStMZ/iraja.webp',
    features: [
      'Localização central',
      'Salas climatizadas',
      'Serviço de copa completo',
      'Acessibilidade total',
    ],
  },
  'guaratiba': {
    name: 'Cemitério de Guaratiba',
    location: 'Guaratiba, Rio de Janeiro',
    phone: '(21) 9999-1111',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério de Guaratiba oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/WWVGrS6s/guaratiba.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'caju': {
    name: 'Cemitério do Caju',
    location: 'Caju, Rio de Janeiro',
    phone: '(21) 9999-0000',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério do Caju está situada em uma localização privilegiada. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante`,
    image: 'https://i.ibb.co/ynkTybc7/caju.webp',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
    ],
  },
  'inhauma': {
    name: 'Cemitério de Inhaúma',
    location: 'Inhaúma, Rio de Janeiro',
    phone: '(21) 9999-9999',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério de Inhaúma oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/qFySY1qW/inhauma.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'jardim-da-saudade-panciencia': {
    name: 'Jardim da Saudade (Paciência)',
    location: 'Paciência, Rio de Janeiro',
    phone: '(21) 9999-8888',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério do Jardim da Saudade em Paciência oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/fYBb9HHL/saudade-paciencia.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'jardim-da-saudade-sulacap': {
    name: 'Jardim da Saudade (Sulacap)',
    location: 'Sulacap, Rio de Janeiro',
    phone: '(21) 9999-7777',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério do Jardim da Saudade em Sulacap oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/N2qYT6kH/sulacap.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'memorial-do-carmo': {
    name: 'Memorial do Carmo',
    location: 'Carmo, Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério do Memorial do Carmo oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/hx6Mfrf1/memorial-carmo.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'memorial-do-rio': {
    name: 'Memorial do Rio',
    location: 'Rio de Janeiro, RJ',
    phone: '(21) 9999-5555',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Cemitério do Memorial do Rio oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/MxqgzKws/memorial-do-rio.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'murundu-realgengo': {
    name: 'Murundu Realengo',
    location: 'Realengo, Rio de Janeiro',
    phone: '(21) 9999-4444',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério do Murundu Realengo oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/Z62PXKs0/murundu-realengo.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'paqueta': {
    name: 'Cemitério de Paquetá',
    location: 'Paquetá, Rio de Janeiro',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Paquetá oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/3mNDP2HV/paqueta.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'piabas-recreio': {
    name: 'Cemitério Piabas (Recreio)',
    location: 'Recreio, Rio de Janeiro',
    phone: '(21) 9999-2222',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Piabas no Recreio oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/0jJMjfw1/penitencia.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'ricardo-albuquerque': {
    name: 'Cemitério Ricardo de Albuquerque',
    location: 'Ricardo de Albuquerque, Rio de Janeiro',
    phone: '(21) 9999-1111',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Ricardo de Albuquerque oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/xqdW07Kj/cemiterio-ricardo-albuquerque.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'santa-cruz': {
    name: 'Cemitério de Santa Cruz',
    location: 'Santa Cruz, Rio de Janeiro',
    phone: '(21) 9999-0000',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Santa Cruz oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/20PGswM1/santa-cruz.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'sao-joao-batista': {
    name: 'Cemitério São João Batista',
    location: 'São João Batista, Rio de Janeiro',
    phone: '(21) 9999-9999',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de São João Batista oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/rRp9QL14/sao-joao-batista.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'istaelita': {
    name: 'Cemitério Israelita',
    location: 'Rio de Janeiro, RJ',
    phone: '(21) 9999-8888',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério Israelita oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/zHsfvCNx/israelita.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'penitencia': {
    name: 'Cemitério Penitência',
    location: 'Penitência, Rio de Janeiro',
    phone: '(21) 9999-7777',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de Penitência oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/0jJMjfw1/penitencia.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'sao-francisco-de-paula-catumbi': {
    name: 'São Francisco de Paula (Catumbi)',
    location: 'Catumbi, Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério de São Francisco de Paula no Catumbi oferece um ambiente sereno e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/QFbwBtbB/catumbi.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
  'british-burial-fund': {
    name: 'British Burial Fund (Cemitério dos Ingleses)',
    location: 'Rio de Janeiro, RJ',
    phone: '(21) 9999-5555',
    hours: 'Todos os dias, 24 horas',
    description: `Nosso Cemitério British Burial Fund oferece um ambiente tranquilo e acolhedor. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Jardins contemplativos`,
    image: 'https://i.ibb.co/Y4bH3wQW/ingleses.webp',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
    ],
  },
};
const CemeteryUnitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const unit = id ? cemeteryUnits[id as keyof typeof cemeteryUnits] : null;

  if (!unit) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Unidade não encontrada</h1>
          <Link to="/cemetery-units" className="text-gray-600 hover:text-gray-700">
            Voltar para lista de unidades
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to="/cemetery-units"
          className="inline-flex items-center text-gray-600 hover:text-gray-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar para lista de unidades
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${unit.image})` }}
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-serif text-gray-900 mb-4">
              {unit.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3 text-gray-600" />
                    <span>{unit.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3 text-gray-600" />
                    <span>{unit.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-gray-600" />
                    <span>{unit.hours}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Diferenciais</h3>
                <ul className="space-y-2">
                  {unit.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Sobre a Unidade</h3>
              {unit.description.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={`tel:${unit.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                Ligar para esta unidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CemeteryUnitDetail;