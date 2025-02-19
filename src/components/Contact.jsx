import React from 'react';
import { motion } from 'framer-motion';
// import { Mail, Github, Linkedin } from 'lucide-react';
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <CiMail className="w-6 h-6 bg-black" />,
      label: 'Email',
      value: 'tanishq.bedi@gmail.com',
      link: 'mailto:tanishq.bedi@gmail.com',
      delay: 0.2
    },
    {
      icon: <FaGithub className="w-6 h-6 bg-black" />,
      label: 'GitHub',
      value: 'github/TANISHQBEDI',
      link: 'https://github.com/TANISHQBEDI',
      delay: 0.3
    },
    {
      icon: <FaLinkedin className="w-6 h-6 bg-black" />,
      label: 'LinkedIn',
      value: 'linkedin/tanishq-bedi',
      link: 'https://linkedin.com/in/tanishq-bedi',
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center p-8"
    style={{
        background: "radial-gradient(circle at 50% 50%, #b0b0b0, #444)",
    }}>
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6">
                {/* Icon container */}
                <div className="p-4 bg-gray-100 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                
                {/* Text content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800">
                    {contact.value}
                  </p>
                </div>
                
                {/* Arrow indicator */}
                <motion.div 
                  className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-white"
        >
          Looking forward to connecting with you!
        </motion.p>
      </div>
    </div>
  );
};

export default ContactSection;