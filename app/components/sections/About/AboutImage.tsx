import { motion } from 'framer-motion';
import { useSiteData } from '../../../hooks/useSiteData';

export function AboutImage() {
  const { images } = useSiteData();

  return (
    <motion.div
      className="lg:col-span-5 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg"></div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
        <img
          src={images.about}
          alt="Equipe Alyvra trabalhando em projetos de marketing digital"
          className="w-full h-full object-cover aspect-[4/3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-blue-900/30"></div>

        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Nosso Time de Especialistas</p>
        </div>
        
        {/* Badge flutuante com estatística */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Satisfação</p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</p>
        </div>
      </div>
    </motion.div>
  );
} 