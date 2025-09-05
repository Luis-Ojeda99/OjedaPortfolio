/**
 * Portfolio data for the portfolio website
 * Contains all projects, articles, and personal links organized by categories
 */

export const portfolioData = [
  // Projects
  {
    id: 1,
    title: 'HOMEnVentory',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/HOMEnVentory-square.webp`,
    description: 'Python project created using Django framework with a MTV (Model-Template-View) pattern.',
    shortDescription: 'Django web application for home inventory management',
    githubUrl: 'https://github.com/Luis-Ojeda99/HOMEnVentory',
    technologies: ['Python', 'Django', 'MTV Pattern']
  },
  {
    id: 2,
    title: 'Bookmark App',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/bookmark-app-square.webp`,
    description: 'Bookmark website to keep track of your favorite websites. Created using HTML/CSS/JS.',
    shortDescription: 'Web app to manage and organize bookmarks',
    demoUrl: 'https://luis-ojeda99.github.io/bookmarks-app/',
    githubUrl: 'https://github.com/Luis-Ojeda99/bookmarks-app',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    title: 'Calculator App',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/calculator-app-square.webp`,
    description: 'Calculator web application with functionality to perform basic operations of addition, subtraction, multiplication and division.',
    shortDescription: 'Basic calculator with essential mathematical operations',
    demoUrl: 'https://luis-ojeda99.github.io/calculator/',
    githubUrl: 'https://github.com/Luis-Ojeda99/calculator',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    title: 'PaintyCraft',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/paintyCraft-square.webp`,
    description: 'Paint-like web application with basic functionalities of drawing in a canvas, erasing, storing to local storage, and downloading.',
    shortDescription: 'Digital painting application with canvas functionality',
    demoUrl: 'https://luis-ojeda99.github.io/paintyCraft/',
    githubUrl: 'https://github.com/Luis-Ojeda99/paintyCraft',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API']
  },
  {
    id: 5,
    title: 'TicTacToe Java',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/ticTacToe-java-square.webp`,
    description: 'TicTacToe project created using Java.',
    shortDescription: 'Classic TicTacToe game built with Java',
    githubUrl: 'https://github.com/Luis-Ojeda99/TicTacToe',
    technologies: ['Java']
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'projects',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/portfolio-website-square.webp`,
    description: 'GitHub repository with all the code used for this Portfolio website.',
    shortDescription: 'This React portfolio website you\'re currently viewing',
    githubUrl: 'https://github.com/Luis-Ojeda99/OjedaPortfolio',
    technologies: ['React', 'Tailwind CSS', 'JavaScript']
  },

  // Articles
  {
    id: 7,
    title: 'PHP Importance Article',
    category: 'articles',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post-square.webp`,
    description: 'Article about PHP language and its importance for web developers.',
    shortDescription: 'Medium article discussing PHP\'s role in web development',
    articleUrl: 'https://medium.com/php-and-its-importance-if-you-want-to-be-a-web',
    technologies: ['PHP', 'Web Development']
  },
  {
    id: 8,
    title: 'What is PHP Article',
    category: 'articles',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post2-square.webp`,
    description: 'Article about what is the PHP language and why you should learn it.',
    shortDescription: 'Beginner\'s guide to PHP programming language',
    articleUrl: 'https://medium.com/@luisojeda27180/what-is-php-and-why-you-should-learn-it-a76f2750f367',
    technologies: ['PHP', 'Tutorial']
  },
  {
    id: 9,
    title: 'Creating PHP Web App',
    category: 'articles',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post3-square.webp`,
    description: 'Article about creating a web application using PHP.',
    shortDescription: 'Tutorial on building web applications with PHP',
    articleUrl: 'https://medium.com/@luisojeda27180/creating-a-php-web-application-7d69fa6e23d',
    technologies: ['PHP', 'Web Development', 'Tutorial']
  },

  // About Me / Personal Links
  {
    id: 10,
    title: 'GitHub Profile',
    category: 'me',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/github-profile-square.webp`,
    description: 'My GitHub profile showcasing all my projects and contributions.',
    shortDescription: 'Check out my code repositories and contributions',
    profileUrl: 'https://github.com/Luis-Ojeda99',
    technologies: ['Git', 'Open Source']
  },
  {
    id: 11,
    title: 'LinkedIn Profile',
    category: 'me',
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/linkedin-logo-square.webp`,
    description: 'My professional LinkedIn profile.',
    shortDescription: 'Connect with me professionally on LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/luis-a-ojeda/',
    technologies: ['Professional Networking']
  }
];

// Filter categories for the portfolio
export const portfolioFilters = [
  { key: 'all', label: 'All' },
  { key: 'projects', label: 'Projects' },
  { key: 'articles', label: 'Articles' },
  { key: 'me', label: 'About Me' }
];