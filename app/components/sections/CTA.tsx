import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useSiteData } from '../../hooks/useSiteData';

export function CTA() {
  const { cta, images } = useSiteData();

  return (
    <section id="cta" className="py-24 relative overflow-hidden min-h-screen">
      {/* Background com gradiente e imagem aprimorados */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-990/95 via-purple-950/90 to-blue-950/95"></div>
        <img
          src={images.cta}
          alt="CTA background"
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        {/* Overlay de partículas */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

      {/* Decoração - círculos flutuantes aprimorados */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 rounded-full bg-purple-300/20 blur-3xl animate-pulse delay-1000"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <motion.div
            className="lg:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge de destaque */}
            <motion.div
              className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-400/10 text-purple-300 border border-purple-400/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-400 mr-2"></span>
              Transforme seu Negócio Hoje
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                {cta.title}
              </span>
            </h2>

            <p className="text-xl text-purple-100/90 mb-8 leading-relaxed">
              {cta.description}
            </p>

            {/* Lista de benefícios */}
            <ul className="space-y-3 mb-8">
              {cta.benefits.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-purple-100/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-3 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Botão com efeito de hover aprimorado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="relative overflow-hidden group shadow-lg shadow-purple-900/30"
              >
                <span className="relative z-10">{cta.buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Texto de garantia */}
              <p className="text-sm text-purple-200/70 mt-4 flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Sem compromisso. Cancelamento a qualquer momento.
              </p>
            </motion.div>
          </motion.div>

          {/* Elemento visual - Formulário simplificado */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">{cta.form.title}</h3>

              <div className="space-y-4">
                {cta.form.fields.map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-purple-200 mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/50"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {cta.form.buttonText}
                </Button>

                {/* Selos de segurança */}
                <div className="flex items-center justify-center mt-4 space-x-4">
                  {cta.form.security.map((item, index) => (
                    <div key={index} className="flex items-center text-purple-200/70 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        {item.icon === 'lock' ? (
                          <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></>
                        ) : (
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        )}
                      </svg>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decoração adicional */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping"></div>
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-ping delay-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping delay-600"></div>
        </div>
      </Container>
    </section>
  );
}
