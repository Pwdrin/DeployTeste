import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Heart } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    { id: 'traslado', name: 'Traslado Funerário' },
    { id: 'sepultamento', name: 'Sepultamento' },
    { id: 'cremacao', name: 'Cremação' },
    { id: 'velorio', name: 'Velório' },
    // { id: 'planos', name: 'Planos Funerários' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className={`h-8 w-8 ${isScrolled ? 'text-primary-700' : 'text-white'}`} />
          <span className={`ml-2 text-xl font-serif font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
            Funerária Rio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium ${isScrolled 
                ? (isActive ? 'text-accent-600' : 'text-primary-700 hover:text-accent-600') 
                : (isActive ? 'text-accent-300' : 'text-white hover:text-accent-300')
              } transition-colors`
            }
          >
            Início
          </NavLink>
          
          <div className="relative group">
            <button 
              className={`font-medium ${isScrolled ? 'text-primary-700 hover:text-accent-600' : 'text-white hover:text-accent-300'} transition-colors flex items-center`}
            >
              Serviços
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/servicos/${service.id}`}
                    className="block px-4 py-3 text-primary-700 hover:bg-primary-50 hover:text-accent-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              `font-medium ${isScrolled 
                ? (isActive ? 'text-accent-600' : 'text-primary-700 hover:text-accent-600') 
                : (isActive ? 'text-accent-300' : 'text-white hover:text-accent-300')
              } transition-colors`
            }
          >
            Quem Somos
          </NavLink>
          
          <NavLink 
            to="/contato" 
            className={({ isActive }) => 
              `font-medium ${isScrolled 
                ? (isActive ? 'text-accent-600' : 'text-primary-700 hover:text-accent-600') 
                : (isActive ? 'text-accent-300' : 'text-white hover:text-accent-300')
              } transition-colors`
            }
          >
            Contato
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center">
          <a 
            href="tel:+552199999999" 
            className={`flex items-center font-medium ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}
          >
            <Phone className="h-5 w-5 mr-2" />
            (21) 9999-9999
          </a>
          <Link 
            to="/contato" 
            className={`ml-6 btn ${
              isScrolled ? 'btn-primary' : 'bg-white text-primary-800 hover:bg-primary-50'
            }`}
          >
            Atendimento 24h
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-primary-700' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-700' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 px-4 rounded ${
                    isActive ? 'bg-primary-50 text-accent-600' : 'text-primary-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </NavLink>
              
              <div className="py-2 px-4">
                <h3 className="font-medium text-primary-700 mb-2">Serviços</h3>
                <div className="ml-4 flex flex-col space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicos/${service.id}`}
                      className="text-primary-600 hover:text-accent-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `py-2 px-4 rounded ${
                    isActive ? 'bg-primary-50 text-accent-600' : 'text-primary-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </NavLink>
              
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `py-2 px-4 rounded ${
                    isActive ? 'bg-primary-50 text-accent-600' : 'text-primary-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
              
              <div className="pt-4 border-t border-primary-100">
                <a
                  href="tel:+552199999999"
                  className="flex items-center py-2 px-4 text-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (21) 9999-9999
                </a>
                <Link
                  to="/contato"
                  className="mt-4 btn btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Atendimento 24h
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;