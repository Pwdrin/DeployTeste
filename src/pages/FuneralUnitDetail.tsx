import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowLeft } from 'lucide-react';

const funeralUnits = {
  'tijuca': {
    name: 'Funerária Tijuca',
    location: 'Barra - Rio de Janeiro Rio de Janeiro',
    phone: '(21) 9999-5555',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária da Tijuca está localizada em um ponto privilegiado do Rio de Janeiro, oferecendo fácil acesso e toda infraestrutura necessária. Contamos com:

    • Três salas para velório
    • Sala de repouso familiar
    • Estacionamento próprio
    • Cafeteria
    • Equipe bilíngue`,
    image: 'https://i.ibb.co/N62rF4rV/TIJUCA.jpg',
    features: [
      'Localização central',
      'Salas climatizadas',
      'Serviço de copa completo',
      'Acessibilidade total',
      'Segurança 24 horas',
    ],
  },
  'barra-tijuca': {
    name: 'Funerária Barra da Tijuca',
    location: 'Rua Conde de Bonfim, 456 - Tijuca, Rio de Janeiro',
    phone: '(21) 9999-4444',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária da Barra Tijuca oferece um ambiente acolhedor em uma das regiões mais tradicionais do Rio. Nossa estrutura inclui:

    • Duas salas para velório
    • Sala de estar familiar
    • Estacionamento amplo
    • Capela ecumênica
    • Floricultura`,
    image: 'https://i.ibb.co/mrCJbCYf/barratijuca.jpg',
    features: [
      'Ambiente familiar',
      'Salas privativas',
      'Serviço de florista',
      'Wi-Fi em todas as áreas',
      'Suporte psicológico',
    ],
  },
  'botafogo': {
    name: 'Funerária Botafogo',
    location: 'Av. Roberto Silveira, 789 - Icaraí, Niterói',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária de Botafogo está situada em uma localização privilegiada com vista para a Baía de Guanabara. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/5gh7dvRF/Botafogo-RJ.jpg',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
      'Manobrista 24h',
    ],
  },

  'copacabana': {
    name: 'Funerária Copacabana',
    location: 'Av. Roberto Silveira, 789 - Icaraí, Niterói',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária de Copacabana está situada em uma localização privilegiada com vista para a Baía de Guanabara. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/KxQYPM75/copaca.jpg',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
      'Manobrista 24h',
    ],
  },
  'campo-grande': {
    name: 'Funerária Campo Grande',
    location: 'Av. Roberto Silveira, 789 - Icaraí, Niterói',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária de Campo Grande está situada em uma localização privilegiada e de fácil acesso. Oferecemos:

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
  'santa-cruz': {
    name: 'Funerária Santa Cruz',
    location: 'Santa Cruz - RJ',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária de Santa Cruz está situada em uma localização privilegiada e de fácil acesso. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/KzfTBmDn/santacruz.jpg',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
      'Manobrista 24h',
    ],
  },
  'jacarepagua': {
    name: 'Funerária Jacarépagua',
    location: 'Jacarépagua - RJ',
    phone: '(21) 9999-3333',
    hours: 'Todos os dias, 24 horas',
    description: `Nossa Funerária de Jacarépagua está situada em uma localização privilegiada e de fácil acesso. Oferecemos:

    • Quatro salas para velório
    • Lounge premium
    • Estacionamento coberto
    • Restaurante
    • Equipe multilíngue`,
    image: 'https://i.ibb.co/wrc3x3Sj/Jacarepagua.jpg',
    features: [
      'Vista panorâmica',
      'Ambiente premium',
      'Serviço de buffet',
      'Transmissão online',
      'Manobrista 24h',
    ],
  },
};

const FuneralUnitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const unit = id ? funeralUnits[id as keyof typeof funeralUnits] : null;

  if (!unit) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Unidade não encontrada</h1>
          <Link to="/funeral-units" className="text-gray-600 hover:text-gray-700">
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
          to="/funeral-units"
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

export default FuneralUnitDetail;