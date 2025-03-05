import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Parallax from '../components/Parallax';
import ServiceCard from '../components/ServiceCard';
import BenefitCard from '../components/BenefitCard';
import TestimonialCard from '../components/TestimonialCard';
import { 
  Car, 
  Shovel, 
  Flame, 
  Clock, 
  Building2, 
  FileText, 
  Phone, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import WhatsAppButton from "../components/popup";

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'traslado',
      title: 'Traslado Funerário',
      description: 'Transporte seguro e respeitoso do falecido entre hospitais, residências, IML e cemitérios.',
      icon: <Car className="h-6 w-6" />,
      imageUrl: 'https://images.unsplash.com/photo-1716085593707-7e8b0fe45681?q=80&w=2071',
    },
    {
      id: 'sepultamento',
      title: 'Sepultamento',
      description: 'Organização completa do sepultamento com toda a documentação necessária e suporte à família.',
      icon: <Shovel className="h-6 w-6" />,
      imageUrl: 'https://images.unsplash.com/photo-1716085593707-7e8b0fe45681?q=80&w=2071',
    },
    {
      id: 'cremacao',
      title: 'Cremação',
      description: 'Processo de cremação realizado com dignidade, seguindo todos os protocolos e desejos da família.',
      icon: <Flame className="h-6 w-6" />,
      imageUrl: 'https://images.unsplash.com/photo-1574808146141-fbd663cfb174?q=80&w=2070',
    },
    {
      id: 'velorio',
      title: 'Velório',
      description: 'Espaços confortáveis e acolhedores para a realização do velório, com todo o suporte necessário.',
      icon: <Heart className="h-6 w-6" />,
      imageUrl: 'https://images.unsplash.com/photo-1644670796211-dd53188d5688?q=80&w=2072',
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Atendimento 24 horas',
      description: 'Estamos disponíveis 24 horas por dia, 7 dias por semana, para atender você nos momentos mais difíceis.',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Infraestrutura Moderna',
      description: 'Contamos com instalações modernas e confortáveis para proporcionar um ambiente acolhedor às famílias.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Suporte com Documentação',
      description: 'Oferecemos assistência completa com toda a documentação necessária, simplificando os trâmites legais.',
    },
  ];

  const testimonials = [
    {
      quote: "Em um momento tão difícil, a equipe da Funerária Rio nos deu todo o suporte necessário, com profissionalismo e empatia.",
      author: "Maria Silva",
      service: "Serviço de Sepultamento",
    },
    {
      quote: "Agradeço imensamente o cuidado e respeito com que trataram meu pai. O processo de cremação foi conduzido com muita dignidade.",
      author: "João Oliveira",
      service: "Serviço de Cremação",
    },
    {
      quote: "O atendimento 24 horas foi fundamental para nós. Mesmo de madrugada, fomos atendidos com atenção e cuidado.",
      author: "Ana Santos",
      service: "Atendimento Emergencial",
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
        imageUrl="https://images.unsplash.com/photo-1561577553-674ce32847a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="h-screen"
        overlayOpacity={0.6}
      >
        <div className="container-custom text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Serviços funerários com<br />respeito e dignidade
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Prestando assistência completa às famílias nos momentos mais difíceis
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contato" className="btn bg-primary-700 text-white hover:bg-primary-800">
              Fale Conosco
            </Link>
            <button
  className="btn bg-white text-primary-800 hover:bg-primary-50"
  onClick={() => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Conheça nossos serviços
          </button>
          </motion.div>
        </div>
      </Parallax>

      {/* Services Section */}
      <section id="services-section" className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-subtitle mx-auto">
              Oferecemos uma ampla gama de serviços funerários para atender às necessidades das famílias com dignidade e respeito.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/sobre" 
              className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
            >
              Conheça mais sobre nossa empresa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Parallax 
        imageUrl="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        height="h-auto"
        overlayOpacity={0.7}
      >
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Por que escolher a Funerária Rio?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Estamos comprometidos em oferecer serviços de alta qualidade com empatia e profissionalismo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </Parallax>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">O que dizem sobre nós</h2>
            <p className="section-subtitle mx-auto">
              A confiança e satisfação de nossas famílias atendidas são nosso maior reconhecimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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

      {/* CTA Section */}
      <section className="bg-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Precisa de assistência imediata?
              </h2>
              <p className="text-primary-200 text-lg">
                Estamos disponíveis 24 horas por dia, 7 dias por semana.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>
      <WhatsAppButton/>
    </motion.div>
  );
};

export default Home;