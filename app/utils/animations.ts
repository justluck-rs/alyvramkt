// Funções de animação para elementos da página
// Estas funções serão usadas para animar elementos quando entrarem na viewport

// Função para animar elementos com fade-in
export function fadeInAnimation(element: HTMLElement, delay: number = 0) {
  // Configuração inicial
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
  
  // Função para verificar se o elemento está visível na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animar quando o elemento estiver visível
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        // Parar de observar após a animação
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  // Começar a observar o elemento
  observer.observe(element);
}

// Função para animar elementos com slide-in da esquerda
export function slideInLeftAnimation(element: HTMLElement, delay: number = 0) {
  // Configuração inicial
  element.style.opacity = '0';
  element.style.transform = 'translateX(-50px)';
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
  
  // Função para verificar se o elemento está visível na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animar quando o elemento estiver visível
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
        
        // Parar de observar após a animação
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  // Começar a observar o elemento
  observer.observe(element);
}

// Função para animar elementos com slide-in da direita
export function slideInRightAnimation(element: HTMLElement, delay: number = 0) {
  // Configuração inicial
  element.style.opacity = '0';
  element.style.transform = 'translateX(50px)';
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
  
  // Função para verificar se o elemento está visível na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animar quando o elemento estiver visível
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
        
        // Parar de observar após a animação
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  // Começar a observar o elemento
  observer.observe(element);
}

// Função para animar elementos com zoom-in
export function zoomInAnimation(element: HTMLElement, delay: number = 0) {
  // Configuração inicial
  element.style.opacity = '0';
  element.style.transform = 'scale(0.8)';
  element.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
  
  // Função para verificar se o elemento está visível na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animar quando o elemento estiver visível
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
        
        // Parar de observar após a animação
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  // Começar a observar o elemento
  observer.observe(element);
}

// Hook para aplicar animações a múltiplos elementos
export function setupAnimations() {
  // Função para ser chamada quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', () => {
    // Selecionar elementos para animar
    const fadeElements = document.querySelectorAll('.animate-fade-in');
    const slideLeftElements = document.querySelectorAll('.animate-slide-left');
    const slideRightElements = document.querySelectorAll('.animate-slide-right');
    const zoomElements = document.querySelectorAll('.animate-zoom-in');
    
    // Aplicar animações com delays incrementais
    fadeElements.forEach((el, index) => {
      fadeInAnimation(el as HTMLElement, 0.1 * index);
    });
    
    slideLeftElements.forEach((el, index) => {
      slideInLeftAnimation(el as HTMLElement, 0.1 * index);
    });
    
    slideRightElements.forEach((el, index) => {
      slideInRightAnimation(el as HTMLElement, 0.1 * index);
    });
    
    zoomElements.forEach((el, index) => {
      zoomInAnimation(el as HTMLElement, 0.1 * index);
    });
  });
}
