import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Parallax from '../components/Parallax';
import TestimonialCard from '../components/TestimonialCard';
import { ArrowRight, Phone } from 'lucide-react';
import WhatsAppButton from '../components/popup';

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  imageUrl: string;
  features: string[];
  testimonials: {
    quote: string;
    author: string;
    service: string;
  }[];
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const services: Record<string, ServiceInfo> = {
    traslado: {
      id: 'traslado',
      title: 'Traslado Funerário',
      description: 'Transporte seguro e respeitoso do falecido entre hospitais, residências, IML e cemitérios.',
      longDescription: [
        'O serviço de traslado funerário da Funerária Rio oferece transporte seguro, respeitoso e digno para o falecido, seja entre hospitais, residências, IML (Instituto Médico Legal) ou cemitérios.',
        'Contamos com uma frota moderna de veículos especialmente adaptados para garantir o máximo de respeito e dignidade durante todo o processo de transporte.',
        'Nossa equipe é treinada para realizar o traslado com profissionalismo e discrição, seguindo todos os protocolos sanitários e legais exigidos pelas autoridades competentes.',
        'Realizamos traslados em todo o território nacional e também internacional, cuidando de toda a documentação necessária para o transporte do falecido entre diferentes cidades, estados ou países.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1716085593707-7e8b0fe45681?q=80&w=2071',
      features: [
        'Transporte local, intermunicipal, interestadual e internacional',
        'Veículos modernos e adaptados',
        'Equipe treinada e uniformizada',
        'Assistência com documentação',
        'Disponibilidade 24 horas',
        'Agilidade e pontualidade'
      ],
      testimonials: [
        {
          quote: "O serviço de traslado foi realizado com muito respeito e profissionalismo. A equipe nos deu todo o suporte necessário em um momento tão difícil.",
          author: "Carlos Mendes",
          service: "Traslado Interestadual"
        },
        {
          quote: "Precisamos transportar meu pai de São Paulo para o Rio de Janeiro e a Funerária Rio cuidou de tudo, desde a documentação até o transporte. Muito obrigada pelo cuidado e atenção.",
          author: "Mariana Costa",
          service: "Traslado Interestadual"
        }
      ]
    },
    sepultamento: {
      id: 'sepultamento',
      title: 'Sepultamento',
      description: 'Organização completa do sepultamento com toda a documentação necessária e suporte à família.',
      longDescription: [
        'O serviço de sepultamento da Funerária Rio oferece organização completa de todo o processo, desde a preparação do corpo até a cerimônia final no cemitério.',
        'Cuidamos de toda a documentação necessária, incluindo a obtenção da certidão de óbito, liberação do corpo e demais trâmites legais, poupando a família de preocupações burocráticas neste momento delicado.',
        'Oferecemos diferentes opções de urnas funerárias, ornamentação com flores e arranjos, além de serviços complementares como cerimonial e assistência religiosa conforme a tradição da família.',
        'Nossa equipe acompanha todo o processo, desde o velório até o momento do sepultamento, garantindo que tudo ocorra com dignidade, respeito e conforme os desejos da família e do falecido.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1716085593707-7e8b0fe45681?q=80&w=2071',
      features: [
        'Preparação e higienização do corpo',
        'Urnas funerárias de diferentes modelos',
        'Ornamentação com flores',
        'Assistência com documentação',
        'Cerimonial e assistência religiosa',
        'Acompanhamento até o cemitério'
      ],
      testimonials: [
        {
          quote: "A equipe da Funerária Rio nos deu todo o suporte necessário durante o sepultamento de minha mãe. Foram atenciosos, respeitosos e cuidaram de todos os detalhes.",
          author: "Roberto Almeida",
          service: "Serviço de Sepultamento"
        },
        {
          quote: "Agradeço imensamente o cuidado e a atenção que recebemos. A cerimônia foi conduzida com muito respeito e dignidade, exatamente como gostaríamos.",
          author: "Fernanda Santos",
          service: "Serviço de Sepultamento"
        }
      ]
    },
    cremacao: {
      id: 'cremacao',
      title: 'Cremação',
      description: 'Processo de cremação realizado com dignidade, seguindo todos os protocolos e desejos da família.',
      longDescription: [
        'O serviço de cremação da Funerária Rio é realizado com o máximo respeito e dignidade, seguindo todos os protocolos estabelecidos e os desejos da família e do falecido.',
        'Cuidamos de toda a documentação necessária para o processo de cremação, incluindo a autorização judicial quando necessária, simplificando os trâmites burocráticos para a família.',
        'Oferecemos diferentes opções de urnas para o velório e uma variedade de urnas cinerárias para a guarda das cinzas após a cremação, atendendo às preferências e necessidades da família.',
        'Nossa equipe acompanha todo o processo, desde o velório até a entrega das cinzas à família, garantindo que tudo ocorra conforme planejado e com o devido respeito.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1574808146141-fbd663cfb174?q=80&w=2070',
      features: [
        'Documentação completa para cremação',
        'Urnas para velório e urnas cinerárias',
        'Cerimônia de despedida',
        'Transporte para o crematório',
        'Acompanhamento de todo o processo',
        'Entrega das cinzas à família'
      ],
      testimonials: [
        {
          quote: "O processo de cremação foi conduzido com muito respeito e dignidade. A equipe nos orientou em cada etapa e nos deu todo o suporte necessário.",
          author: "Paulo Ribeiro",
          service: "Serviço de Cremação"
        },
        {
          quote: "Agradeço à Funerária Rio pelo profissionalismo e sensibilidade durante todo o processo de cremação de meu pai. Tudo foi realizado conforme seus desejos.",
          author: "Luciana Martins",
          service: "Serviço de Cremação"
        }
      ]
    },
    velorio: {
      id: 'velorio',
      title: 'Velório',
      description: 'Espaços confortáveis e acolhedores para a realização do velório, com todo o suporte necessário.',
      longDescription: [
        'O serviço de velório da Funerária Rio oferece espaços confortáveis e acolhedores para que familiares e amigos possam se despedir do ente querido com dignidade e respeito.',
        'Nossas salas de velório são amplas, climatizadas e equipadas com poltronas confortáveis, banheiros privativos, copa e sala de descanso, proporcionando conforto à família durante este momento difícil.',
        'Oferecemos serviços complementares como ornamentação com flores, música ambiente, serviço de café e água, além de assistência religiosa conforme a tradição da família.',
        'Nossa equipe está presente durante todo o velório, prestando assistência e garantindo que tudo ocorra conforme planejado, permitindo que a família se concentre apenas na despedida de seu ente querido.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1644670796211-dd53188d5688?q=80&w=2072',
      features: [
        'Salas amplas e climatizadas',
        'Poltronas confortáveis',
        'Banheiros privativos',
        'Copa e sala de descanso',
        'Ornamentação com flores',
        'Assistência religiosa'
      ],
      testimonials: [
        {
          quote: "As instalações da Funerária Rio proporcionaram um ambiente acolhedor para nos despedirmos de nossa avó. A equipe foi muito atenciosa e respeitosa.",
          author: "Marcelo Souza",
          service: "Serviço de Velório"
        },
        {
          quote: "Agradeço o cuidado e a atenção que recebemos durante o velório de meu esposo. O ambiente tranquilo e acolhedor nos ajudou muito neste momento difícil.",
          author: "Teresa Oliveira",
          service: "Serviço de Velório"
        }
      ]
    },
    // planos: {
    //   id: 'planos',
    //   title: 'Planos Funerários',
    //   description: 'Planos funerários com diferentes opções para atender às necessidades e preferências de cada família.',
    //   longDescription: [
    //     'Os planos funerários da Funerária Rio oferecem tranquilidade e segurança para você e sua família, garantindo que todos os serviços funerários sejam realizados conforme planejado, sem preocupações adicionais em um momento tão delicado.',
    //     'Oferecemos diferentes modalidades de planos, com coberturas variadas que podem incluir desde os serviços básicos até os mais completos, atendendo às necessidades e preferências de cada família.',
    //     'Nossos planos podem incluir serviços como traslado, preparação do corpo, urna funerária, ornamentação, velório, sepultamento ou cremação, além de assistência com toda a documentação necessária.',
    //     'Ao adquirir um plano funerário, você garante que seus desejos serão respeitados e que sua família não precisará tomar decisões difíceis ou arcar com custos inesperados em um momento de dor e luto.'
    //   ],
    //   imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    //   features: [
    //     'Diferentes modalidades de planos',
    //     'Pagamento facilitado',
    //     'Cobertura para toda a família',
    //     'Garantia de atendimento 24 horas',
    //     'Assistência completa com documentação',
    //     'Personalização conforme necessidades'
    //   ],
    //   testimonials: [
    //     {
    //       quote: "Adquiri o plano funerário da Funerária Rio há dois anos e, quando precisei utilizar para meu pai, tudo foi realizado conforme o combinado. Não tive nenhuma preocupação adicional.",
    //       author: "Ricardo Pereira",
    //       service: "Plano Funerário Familiar"
    //     },
    //     {
    //       quote: "O plano funerário nos deu tranquilidade em um momento muito difícil. Todos os serviços foram realizados com dignidade e respeito, exatamente como planejado.",
    //       author: "Cristina Moraes",
    //       service: "Plano Funerário Individual"
    //     }
    //   ]
    // }
  };

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-6">
          Serviço não encontrado
        </h1>
        <p className="text-primary-600 mb-8">
          O serviço que você está procurando não está disponível.
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Parallax 
        imageUrl={service.imageUrl}
        height="h-96"
        overlayOpacity={0.6}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </Parallax>
      
      <WhatsAppButton/>

      {/* Service Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-title">Sobre o Serviço</h2>
              
              <div className="space-y-6">
                {service.longDescription.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className="text-primary-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                  O que Incluímos
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-accent-600 mr-3">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-primary-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-primary-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-4">
                  Precisa de Assistência?
                </h3>
                <p className="text-primary-600 mb-6">
                  Estamos disponíveis 24 horas por dia, 7 dias por semana, para atender você e sua família com dignidade e respeito.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+552199999999" 
                    className="btn btn-primary w-full justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (21) 9999-9999
                  </a>
                  <Link 
                    to="/contato" 
                    className="btn btn-secondary w-full justify-center"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-4">
                  Outros Serviços
                </h3>
                <ul className="space-y-3">
                  {Object.values(services)
                    .filter(s => s.id !== service.id)
                    .map((s) => (
                      <li key={s.id}>
                        <Link 
                          to={`/servicos/${s.id}`}
                          className="flex items-center text-primary-700 hover:text-accent-600 transition-colors"
                        >
                          <ArrowRight className="mr-2 h-4 w-4" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {service.testimonials.length > 0 && (
        <section className="py-16 bg-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">O que dizem sobre este serviço</h2>
              <p className="section-subtitle mx-auto">
                Depoimentos de famílias que utilizaram nosso serviço de {service.title.toLowerCase()}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  service={testimonial.service}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Podemos ajudar você?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações sobre nosso serviço de {service.title.toLowerCase()} ou para solicitar um orçamento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+552199999999" 
              className="btn bg-white text-primary-800 hover:bg-primary-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              (21) 9999-9999
            </a>
            <Link 
              to="/contato" 
              className="btn bg-accent-600 text-white hover:bg-accent-700"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;