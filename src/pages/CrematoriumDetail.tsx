import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft } from 'lucide-react';

const crematoriums = {
  'caju': {
    name: 'Crematório do Caju',
    location: 'R. Carlos Seidl, 1281 – Caju, Rio de Janeiro',
    phone: '(21) 9999-8888',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório do Caju oferece um ambiente sereno e acolhedor para a despedida de entes queridos. Nossa estrutura moderna inclui:

    • Capela para cerimônias
    • Sala de estar para familiares
    • Estacionamento amplo
    • Jardim memorial
    • Equipe especializada disponível 24h`,
    image: 'https://i.ibb.co/Z6nxH6Xd/caju.jpg',
    features: [
      'Tecnologia moderna de cremação',
      'Ambiente climatizado',
      'Café e copa para familiares',
      'Acessibilidade completa',
      'Segurança 24 horas',
    ],
  },
  'catumbi': {
    name: 'Crematório do Catumbi',
    location: 'R. de Catumbi, 120 – Catumbi, Rio de Janeiro',
    phone: '(21) 9999-7777',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório São Francisco de Paula, conhecido popularmente como Crematório do Catumbi, é uma referência em serviços funerários no coração do Rio de Janeiro. Nossa estrutura inclui:

    • Duas capelas para cerimônias
    • Sala VIP para familiares
    • Estacionamento coberto
    • Jardins contemplativos
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/xK20NR99/crematorio-catumbi.jpg',
    features: [
      'Sistema de cremação sustentável',
      'Cerimônias personalizadas',
      'Suporte psicológico',
      'Wi-Fi em todas as áreas',
      'Serviço de buffet',
    ],
  },
  'sulacap': {
    name: 'Crematório Sulacap',
    location: 'Av. Carlos Pontes, 500 Jardim Sulacap, Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório Jardim da Saudade oferece um ambiente sereno e acolhedor para realizar a despedida de seus entes queridos. Nossa estrutura inclui:

    • Capela com vista panorâmica
    • Lounge executivo
    • Estacionamento com manobrista
    • Jardim zen
    • Equipe especializada 24h`,
    image: 'https://i.ibb.co/KzRkvMPJ/sulacap.jpg',
    features: [
      'Tecnologia de ponta',
      'Cerimônias ao ar livre',
      'Serviço de transmissão online',
      'Ambiente 100% acessível',
      'Suporte multilíngue',
    ],
  },
  'carmo': {
    name: 'Memorial do Carmo',
    location: 'Rua Monsenhor Manoel Gomes, 287 Caju, Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório Jardim da Saudade oferece um ambiente sereno e acolhedor para realizar a despedida de seus entes queridos. Nossa estrutura inclui:

    • Capela com vista panorâmica
    • Lounge executivo
    • Estacionamento com manobrista
    • Jardim zen
    • Equipe especializada 24h`,
    image: 'https://i.ibb.co/HDr78fwQ/carmo.jpg',
    features: [
      'Tecnologia de ponta',
      'Cerimônias ao ar livre',
      'Serviço de transmissão online',
      'Ambiente 100% acessível',
      'Suporte multilíngue',
    ],
  },
  'penitencia': {
    name: 'Crematório Penitência',
    location: 'R. Monsenhor Manuel Gomes, 307 Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório da Penitência, um dos mais tradicionais do Rio de Janeiro, localizado no Caju. Nossa estrutura inclui:

    • Capela com vista panorâmica
    • Lounge executivo
    • Estacionamento com manobrista
    • Jardim zen
    • Equipe especializada 24h`,
    image: 'https://i.ibb.co/Kx9dZML3/penitencia.jpg',
    features: [
      'Tecnologia de ponta',
      'Cerimônias ao ar livre',
      'Serviço de transmissão online',
      'Ambiente 100% acessível',
      'Suporte multilíngue',
    ],
  },

  'memorial-rio': {
    name: 'Memorial Rio',
    location: 'R. Francisco de Souza e Melo, 102 Cordovil Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório Memorial do Rio oferece um novo conceito em acolhimento, com uma infraestrutura completa projetada para proporcionar conforto e tranquilidade às famílias. Nossa estrutura inclui:

    • Capela com vista panorâmica
    • Lounge executivo
    • Estacionamento com manobrista
    • Jardim zen
    • Equipe especializada 24h`,
    image: 'https://i.ibb.co/YB9TTxxp/memorialrio.jpg',
    features: [
      'Tecnologia de ponta',
      'Cerimônias ao ar livre',
      'Serviço de transmissão online',
      'Ambiente 100% acessível',
      'Suporte multilíngue',
    ],
  },

  'joao-batista': {
    name: 'São João Batista',
    location: 'Rua da Matriz, 754 – Centro, São João de Meriti, Rio de Janeiro',
    phone: '(21) 9999-6666',
    hours: 'Todos os dias, 24 horas',
    description: `O Crematório Metropolitano São João Batista é a mais recente e moderna opção para quem busca um serviço de cremação na Baixada Fluminense. Nossa estrutura inclui:

    • Capela com vista panorâmica
    • Lounge executivo
    • Estacionamento com manobrista
    • Jardim zen
    • Equipe especializada 24h`,
    image: 'https://i.ibb.co/MkXw6vty/batista.jpg',
    features: [
      'Tecnologia de ponta',
      'Cerimônias ao ar livre',
      'Serviço de transmissão online',
      'Ambiente 100% acessível',
      'Suporte multilíngue',
    ],
  },
};

const CrematoriumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const crematorium = id ? crematoriums[id as keyof typeof crematoriums] : null;

  if (!crematorium) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Unidade não encontrada</h1>
          <Link to="/crematorium-units" className="text-gray-600 hover:text-gray-700">
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
          to="/crematorium-units"
          className="inline-flex items-center text-gray-600 hover:text-gray-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar para lista de unidades
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${crematorium.image})` }}
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-serif text-gray-900 mb-4">
              {crematorium.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3 text-gray-600" />
                    <span>{crematorium.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3 text-gray-600" />
                    <span>{crematorium.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-gray-600" />
                    <span>{crematorium.hours}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Diferenciais</h3>
                <ul className="space-y-2">
                  {crematorium.features.map((feature, index) => (
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
              {crematorium.description.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={`tel:${crematorium.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
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

export default CrematoriumDetail;