import { useSiteData } from '../../../hooks/useSiteData';

export function AboutValues() {
  const { about } = useSiteData();

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </span>
        Nossos Valores Fundamentais
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {about.values.map((value, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover-lift">
            <span className="mr-3 text-purple-600 dark:text-purple-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{value}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {index === 0 && "Criamos soluções que desafiam o status quo e impulsionam resultados extraordinários."}
                {index === 1 && "Comprometidos com a excelência em cada detalhe, superando expectativas em cada projeto."}
                {index === 2 && "Focamos em métricas claras e resultados tangíveis que impactam seu negócio."}
                {index === 3 && "Construímos relacionamentos duradouros baseados em confiança e crescimento mútuo."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 