export const categories = [
  'All categories',
  'Development',
  'Design',
  'Business',
  'Marketing',
  'Data Science'
];

export const courses = [
  {
    id: 'react',
    title: 'React Fundamentals: Build Modern Interfaces',
    category: 'Development',
    level: 'Beginner',
    duration: '6h 20m',
    rating: 4.9,
    students: 12480,
    instructor: 'Maya Johnson',
    role: 'Senior Frontend Engineer',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=85',
    description: 'Learn React step by step and build responsive, component-driven user interfaces.',
    outcomes: [
      'Understand components, JSX, props and state',
      'Build interactive UIs with hooks',
      'Organize a React app into reusable components',
      'Create a small project from scratch'
    ],
    lessons: [
      'Welcome to React',
      'JSX and your first component',
      'Props and reusable UI',
      'State and event handling',
      'Working with lists and forms',
      'Effects and data flow',
      'Routing a React app',
      'Build a mini project'
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design Essentials',
    category: 'Design',
    level: 'Beginner',
    duration: '4h 45m',
    rating: 4.8,
    students: 9360,
    instructor: 'Alex Chen',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=85',
    description: 'Explore user-centered design, wireframes, visual hierarchy, prototyping, and usability testing.',
    outcomes: [
      'Apply visual hierarchy and spacing',
      'Map a user journey',
      'Create wireframes and prototypes',
      'Run a usability review'
    ],
    lessons: [
      'What makes a great user experience?',
      'Research and user personas',
      'Information architecture',
      'Wireframing essentials',
      'Color, type and hierarchy',
      'Prototyping and feedback',
      'Usability testing basics'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing from Zero to Launch',
    category: 'Marketing',
    level: 'Beginner',
    duration: '5h 10m',
    rating: 4.7,
    students: 7820,
    instructor: 'Priya Sharma',
    role: 'Growth Marketing Lead',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    description: 'Learn about audiences, content, search, social campaigns, email, analytics, and campaign planning.',
    outcomes: [
      'Define an audience and value proposition',
      'Plan a content calendar',
      'Understand SEO and paid campaigns',
      'Measure campaign performance'
    ],
    lessons: [
      'The digital marketing landscape',
      'Audience research',
      'Content strategy',
      'SEO foundations',
      'Social media campaigns',
      'Email and conversion basics',
      'Analytics and campaign plan'
    ]
  },
  {
    id: 'data',
    title: 'Data Analysis with Python',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '7h 05m',
    rating: 4.9,
    students: 15820,
    instructor: 'Daniel Brooks',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    description: 'Learn data cleaning, analysis, visualization, and how to communicate insights using Python.',
    outcomes: [
      'Load and clean tabular data',
      'Explore data with pandas',
      'Create clear charts',
      'Summarize findings'
    ],
    lessons: [
      'Getting started with data',
      'Python essentials',
      'DataFrames with pandas',
      'Cleaning datasets',
      'Exploratory analysis',
      'Visualizing patterns',
      'Drawing conclusions',
      'Final mini analysis'
    ]
  },
  {
    id: 'business',
    title: 'Business Strategy for New Ideas',
    category: 'Business',
    level: 'Intermediate',
    duration: '3h 55m',
    rating: 4.6,
    students: 5240,
    instructor: 'Jordan Lee',
    role: 'Startup Advisor',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85',
    description: 'Learn to evaluate opportunities, understand customers, define a business model, and present a strategy.',
    outcomes: [
      'Assess a market opportunity',
      'Describe a business model',
      'Choose useful success metrics',
      'Present a concise strategy'
    ],
    lessons: [
      'From idea to opportunity',
      'Customer discovery',
      'Business models',
      'Prioritization and experiments',
      'Metrics and decisions',
      'Presenting your strategy'
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Projects for Real Practice',
    category: 'Development',
    level: 'Intermediate',
    duration: '6h 40m',
    rating: 4.8,
    students: 11260,
    instructor: 'Sam Rivera',
    role: 'JavaScript Developer',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
    description: 'Strengthen your JavaScript skills through practical projects covering events, arrays, async code, and APIs.',
    outcomes: [
      'Use modern JavaScript syntax',
      'Handle DOM events and forms',
      'Work with asynchronous requests',
      'Structure project code clearly'
    ],
    lessons: [
      'Set up your project',
      'DOM and event handling',
      'Arrays and objects',
      'Forms and validation',
      'Async JavaScript',
      'Working with APIs',
      'Refactoring modules',
      'Project showcase'
    ]
  },
  {
    id: 'storytelling',
    title: 'Brand Storytelling and Content',
    category: 'Marketing',
    level: 'Beginner',
    duration: '3h 35m',
    rating: 4.7,
    students: 4180,
    instructor: 'Nina Patel',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
    description: 'Find your brand voice and create stories for websites, social platforms, newsletters, and campaigns.',
    outcomes: [
      'Define a consistent brand voice',
      'Shape a memorable story',
      'Write clear content briefs',
      'Repurpose content'
    ],
    lessons: [
      'Why stories connect',
      'Find your brand voice',
      'Story structure',
      'Writing for digital',
      'Content planning',
      'Review your story'
    ]
  },
  {
    id: 'productivity',
    title: 'Personal Productivity and Focus',
    category: 'Business',
    level: 'Beginner',
    duration: '2h 50m',
    rating: 4.6,
    students: 3690,
    instructor: 'Taylor Morgan',
    role: 'Learning Coach',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    description: 'Build a sustainable workflow with priorities, focused work sessions, weekly reviews, and realistic routines.',
    outcomes: [
      'Set weekly priorities',
      'Reduce task switching',
      'Plan focused work blocks',
      'Improve your workflow'
    ],
    lessons: [
      'Understand your time',
      'Priorities and planning',
      'Build a focus routine',
      'Manage distractions',
      'Weekly review system'
    ]
  }
];