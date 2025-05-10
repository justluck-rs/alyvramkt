import { motion } from 'framer-motion';
import { useSiteData } from '../../../hooks/useSiteData';
import { AboutValues } from './AboutValues';

export function AboutContent() {
  const { about } = useSiteData();

  return (
    <motion.div
      className="lg:col-span-7"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-800/50">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          {about.description}
        </p>

        <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg mb-8">
          <p className="text-gray-700 dark:text-gray-300 font-medium italic">
            "{about.mission}"
          </p>
        </div>

        <AboutValues />
      </div>
    </motion.div>
  );
} 