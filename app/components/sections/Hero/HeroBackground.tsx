import { useSiteData } from '../../../hooks/useSiteData';
import { useEffect, useRef } from 'react';

export function HeroBackground() {
  const { images } = useSiteData();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
  }

  // Criar uma partícula com propriedades aleatórias
  function createParticle(canvas: HTMLCanvasElement): Particle {
    const colors = [
      '139, 92, 246', // purple-500
      '96, 165, 250',  // blue-400
      '192, 132, 252', // purple-400
    ];
    
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  // Inicializar canvas com partículas animadas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const maxParticles = 50;

    // Configurar tamanho do canvas
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, 600);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Criar partículas iniciais
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(canvas));
    }

    // Função de animação
    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar e atualizar partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        
        // Atualizar posição
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Resetar partículas quando saem da tela
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle(canvas);
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-990/95 via-purple-950/90 to-blue-950/95"></div>
      <img
        src={images.hero}
        alt="Hero background"
        className="w-full h-full object-cover mix-blend-overlay opacity-30"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Canvas com partículas animadas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-1 opacity-30"
      />
      
      {/* Elementos luminosos em posições estratégicas com animações diferentes */}
      <div className="absolute top-1/3 left-1/6 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl animate-sparkle"></div>
      <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full bg-blue-500/15 blur-3xl animate-sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-purple-400/15 blur-3xl animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/5 right-1/3 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl animate-sparkle" style={{ animationDelay: '2s' }}></div>
      
      {/* Efeito de brilho gradiente nas bordas */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-800/15 to-transparent"></div>
    </div>
  );
} 