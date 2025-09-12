/**
 * Hero section data for the portfolio
 * Contains personal information, job titles, and slideshow images
 */

export const heroData = {
  name: "LUIS OJEDA",
  roles: [
    'Desarrollador Full Stack', 
    'Desarrollador web', 
    'Consultor de sistemas'
  ],
  slides: [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop'
  ]
};

// Animation configuration
export const heroConfig = {
  slideInterval: 4000,      // milliseconds between slides
  typewriterSpeed: 90      // milliseconds per character
};