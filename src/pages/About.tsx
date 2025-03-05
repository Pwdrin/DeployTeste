import React from 'react';
import { motion } from 'framer-motion';
import Parallax from '../components/Parallax';
import TeamMember from '../components/TeamMember';
import { Heart, Clock, Users, Shield } from 'lucide-react';
import WhatsAppButton from "../components/popup";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Roberto Oliveira',
      role: 'Diretor Geral',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Carla Santos',
      role: 'Gerente de Atendimento',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Marcelo Lima',
      role: 'Coordenador de Operações',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Juliana Costa',
      role: 'Assistente Social',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Respeito',
      description: 'Tratamos cada família com o máximo respeito, honrando a memória de seus entes queridos.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Disponibilidade',
      description: 'Estamos disponíveis 24 horas por dia, 7 dias por semana, para atender às necessidades das famílias.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Empatia',
      description: 'Compreendemos a dor da perda e oferecemos suporte emocional durante todo o processo.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Integridade',
      description: 'Agimos com transparência e honestidade em todos os aspectos de nosso trabalho.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Parallax 
        imageUrl="https://images.unsplash.com/photo-1604662800148-7d2077a4813e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="h-96"
        overlayOpacity={0.6}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Quem Somos
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça nossa história, valores e a equipe dedicada a oferecer serviços funerários com dignidade e respeito.
          </p>
        </div>
      </Parallax>

      <WhatsAppButton/>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Nossa História</h2>
              <p className="text-primary-600 mb-6">
                Fundada em 1985 no coração do Rio de Janeiro, a Funerária Rio nasceu do desejo de oferecer serviços funerários com dignidade e respeito às famílias em momentos de dor e perda.
              </p>
              <p className="text-primary-600 mb-6">
                Ao longo de mais de três décadas, construímos uma reputação sólida baseada na confiança, no profissionalismo e no atendimento humanizado. Nossa trajetória é marcada pelo compromisso constante com a qualidade e pela busca contínua de aprimoramento em nossos serviços.
              </p>
              <p className="text-primary-600">
                Hoje, somos reconhecidos como uma referência no setor funerário do Rio de Janeiro, atendendo famílias de todas as regiões da cidade com o mesmo cuidado e dedicação que nos motivaram desde o início.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1592951117963-65956c1ce051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Fachada da Funerária Rio" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-700 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-serif italic">
                  "Nossa missão é oferecer conforto e suporte às famílias nos momentos mais difíceis, com dignidade e respeito."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle mx-auto">
              Princípios que norteiam nosso trabalho e compromisso com as famílias que atendemos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="p-3 rounded-full bg-primary-100 text-primary-700 inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle mx-auto">
              Profissionais dedicados e preparados para oferecer o melhor atendimento nos momentos mais difíceis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Facilities Section */}
      <Parallax 
        imageUrl="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        height="h-auto"
        overlayOpacity={0.7}
      >
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Nossas Instalações
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ambientes acolhedores e confortáveis para receber as famílias com dignidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Recepção" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">Recepção</h3>
                <p className="text-primary-600">
                  Ambiente acolhedor para receber as famílias com conforto e privacidade.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sala de Velório" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">Salas de Reunião</h3>
                <p className="text-primary-600">
                  Espaços amplos e confortáveis para a realização de reuniões com privacidade.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1517346665566-17b938c7f3ad?q=80&w=2070" 
                alt="Sala de Apoio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">Salas de Apoio</h3>
                <p className="text-primary-600">
                  Áreas de descanso e apoio para familiares durante o período de velório.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </motion.div>
  );
};

export default About;