import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxProps {
  imageUrl: string;
  height?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

const Parallax: React.FC<ParallaxProps> = ({
  imageUrl,
  height = 'h-96',
  children,
  overlay = true,
  overlayOpacity = 0.5,
}) => {
  return (
    <div 
      className={`relative ${height} w-full overflow-hidden`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {overlay && (
        <div 
          className="absolute inset-0 bg-primary-900"
          style={{ opacity: overlayOpacity }}
        ></div>
      )}
      
      {children && (
        <motion.div 
          className="relative z-10 h-full flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Parallax;