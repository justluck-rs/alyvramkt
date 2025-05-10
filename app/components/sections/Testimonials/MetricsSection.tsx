import { motion } from 'framer-motion';
import { useSiteData } from '../../../hooks/useSiteData';

export function MetricsSection() {
  const { testimonials } = useSiteData();

  return (
    <motion.div
      className="relative mt-20 py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nossos Números
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {testimonials.metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
                metric.highlight === 'purple' 
                  ? 'from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300'
                  : 'from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300'
              }`}>
                {metric.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 