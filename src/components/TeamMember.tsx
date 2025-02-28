import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  delay = 0,
}) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary-800">{name}</h3>
      <p className="text-primary-600">{role}</p>
    </motion.div>
  );
};

export default TeamMember;