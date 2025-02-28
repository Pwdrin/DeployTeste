import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-serif font-bold text-white">
                Funerária Rio
              </span>
            </Link>
            <p className="text-primary-200 mb-6">
              Prestando serviços funerários com dignidade, respeito e profissionalismo no Rio de Janeiro.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/traslado" className="text-primary-200 hover:text-white transition-colors">
                  Traslado Funerário
                </Link>
              </li>
              <li>
                <Link to="/servicos/sepultamento" className="text-primary-200 hover:text-white transition-colors">
                  Sepultamento
                </Link>
              </li>
              <li>
                <Link to="/servicos/cremacao" className="text-primary-200 hover:text-white transition-colors">
                  Cremação
                </Link>
              </li>
              <li>
                <Link to="/servicos/velorio" className="text-primary-200 hover:text-white transition-colors">
                  Velório
                </Link>
              </li>
              {/* <li>
                <Link to="/servicos/planos" className="text-primary-200 hover:text-white transition-colors">
                  Planos Funerários
                </Link>
              </li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-200 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-primary-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-primary-200 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-primary-200 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-200 mr-3 mt-0.5" />
                <span className="text-primary-200">
                  Av. Rio Branco, 156 - Centro<br />
                  Rio de Janeiro - RJ, 20040-901
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-200 mr-3" />
                <a href="tel:+552199999999" className="text-primary-200 hover:text-white transition-colors">
                  (21) 9999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-200 mr-3" />
                <a href="mailto:contato@funerariaexemplo.com.br" className="text-primary-200 hover:text-white transition-colors">
                  contato@funerariaexemplo.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary-200 mr-3" />
                <span className="text-primary-200">
                  Atendimento 24 horas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            &copy; {new Date().getFullYear()} Funerária Rio. Todos os direitos reservados.
          </p>
          <p className="text-primary-300 text-sm mt-2 md:mt-0">
            Desenvolvido com respeito e dignidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;