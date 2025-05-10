import { motion } from 'framer-motion';

interface DifferentialCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

export function DifferentialCard({
  title,
  description,
  icon,
  delay,
  gradientFrom,
  gradientTo,
  borderColor
}: DifferentialCardProps) {
  // Usar CSS inline para evitar problemas com classes dinâmicas do Tailwind
  const cardBgGradient = 
    gradientFrom === 'purple' 
      ? 'linear-gradient(135deg, rgba(91, 33, 182, 0.15) 0%, rgba(76, 29, 149, 0.25) 100%)' 
      : 'linear-gradient(135deg, rgba(29, 78, 216, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)';
  
  const iconBgGradient = 
    gradientFrom === 'purple' 
      ? 'linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(109, 40, 217) 100%)' 
      : 'linear-gradient(135deg, rgb(96, 165, 250) 0%, rgb(29, 78, 216) 100%)';
  
  const borderStyle = 
    borderColor === 'purple' 
      ? '1px solid rgba(139, 92, 246, 0.3)' 
      : '1px solid rgba(96, 165, 250, 0.3)';

  return (
    <motion.div
      className="relative rounded-2xl p-8 transition-all duration-300 hover-lift cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ 
        zIndex: 10, 
        background: cardBgGradient,
        border: borderStyle,
        boxShadow: `0 4px 20px -5px rgba(${gradientFrom === 'purple' ? '139, 92, 246' : '96, 165, 250'}, 0.2)`
      }}
    >
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ background: iconBgGradient }}
      >
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
} 