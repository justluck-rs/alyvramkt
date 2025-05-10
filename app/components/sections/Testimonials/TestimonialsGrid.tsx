import { motion } from 'framer-motion';
import { useSiteData } from '../../../hooks/useSiteData';

export function TestimonialsGrid() {
  const { testimonials } = useSiteData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.items.map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{testimonial.content}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 