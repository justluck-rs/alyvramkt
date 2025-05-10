import { motion } from 'framer-motion';
import { Badge } from '../../ui/Badge';
import { useSiteData } from '../../../hooks/useSiteData';

export function ServicesHeader() {
  const { services } = useSiteData();

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
          {services.title}
        </span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in">
        {services.subtitle}
      </p>
    </motion.div>
  );
} 