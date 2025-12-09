export interface Project {
  id: number;
  title: string;
  type: string;
  year: number;
  thumbnail: string;
  description: string;
  abstract: string;
  features: string[];
  contributions: string[];
  liveLink: string;
  gitLink: string;
  techStack: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Placement Preparation App",
    type: "Mobile",
    year: 2025,
    thumbnail: "/assets/placement/thumb.webp",
    description:"A complete mobile application designed to help students prepare for campus placements through structured learning modules, topic-wise practice, mock interviews, and AI-generated performance feedback. The app provides a seamless preparation experience with an intuitive and modern UI.",
    abstract: "Students often struggle with scattered placement resources, inconsistent guidance, and the absence of a structured learning path. This app solves those challenges by offering a unified, end-to-end preparation platform that combines aptitude learning, DSA problem-solving, curated MCQs, and AI-powered interview simulations. With interactive concept explanations, topic-wise practice, and resume-based question generation, it helps students prepare efficiently and confidently—all within a seamless mobile experience.",
    features: [
      "Structured learning modules covering aptitude, reasoning, DSA, and CS fundamentals",
      "Clear explanations, formulas, shortcuts, and examples for essential topics",
      "Topic-wise MCQs for aptitude, CS fundamentals, and programming languages like C, Java, and Python",
      "AI-powered interview simulations with resume-based technical question generation",
      "Detailed feedback, scoring, and improvement suggestions after each AI interview session",
      "Powerful search system to quickly locate topics or practice questions",
      "Comprehensive practice exercises to reinforce conceptual understanding",
      "Personalized preparation environment combining learning, practice, and interview simulation"
    ],
    contributions: [
      "Developed the mobile application using React Native for cross-platform support",
      "Integrated Google authentication using Supabase",
      "Implemented AI-driven interview question generation and feedback using Gemini API",
      "Designed intuitive UI/UX for seamless navigation across learning and practice modules",
      "Built robust topic-wise MCQ system and search functionality"
    ],
    liveLink: "https://example.com",
    gitLink: "https://github.com/example",
    techStack: ["React Native", "TypeScript", "Supabase", "Gemini API"],
    images: [
      "/assets/placement/1.webp",
      "/assets/placement/2.webp",
      "/assets/placement/3.webp",
      "/assets/placement/4.webp",
      "/assets/placement/5.webp"
    ]
  },

  {
    id: 2,
    title: "Plastic Waste Management Website",
    type: "Web",
    year: 2025,
    thumbnail: "/assets/green/thumb.webp",
    description: "A sustainability-driven website that enables users to exchange collected plastic for Green Coins, connects recycling centers, and purchase eco-friendly recycled products. It promotes better waste segregation through interactive features and a rewards-based recycling system.",
    abstract: "Plastic waste often ends up unmanaged due to limited awareness, lack of motivation, and difficulty accessing proper recycling channels. This platform tackles the problem by enabling users to exchange collected plastic for Green Coins, which can be redeemed for eco-friendly and recycled products. The website provides an engaging, rewards-driven system that encourages users to recycle consistently while supporting a circular, environmentally conscious community.",
    features: [
      "Customers can request plastic pickups and track collection status",
      "Customers earn Green Coins for recycling activities",
      "Customers can browse and order recycled products",
      "Admins can manage pickup requests, waste collection, and product inventory",
      "Admin dashboard provides analytics and reporting on pickups, orders, and coin transactions",
      "Secure login with role-based access for Admins and Customers",
      "End-to-end management of waste collection and order fulfillment",
      "Interactive interface for monitoring and managing recycling activities"
    ],
    contributions: [
      "Developed frontend using React and styled with TailwindCSS",
      "Built backend APIs with Spring Boot and Spring Data JPA",
      "Configured PostgreSQL for storing pickups, orders, and Green Coin transactions",
      "Integrated secure RESTful API communication between frontend and backend using Axios",
      "Implemented role-based access control and modular workflow for Admin and Customer",
      "Managed full lifecycle of pickups and orders with real-time updates",
      "Designed dashboards and interfaces for both Admin and Customer modules"
    ],
    liveLink: "https://example.com",
    gitLink: "https://github.com/example",
    techStack: ["React","TypeScript","TailwindCSS","Spring Boot","Spring Data JPA","PostgreSQL"],
    images: ["/assets/green/1.webp", "/assets/green/2.webp"]
  },

  {
    id: 3,
    title: "Earthquake Visualizer",
    type: "Web",
    year: 2025,
    thumbnail: "/assets/earth/thumb.webp",
    description: "A real-time seismic activity visualization platform that displays global earthquake data from the past 30 days on an interactive map. It highlights magnitude, depth, and location with smooth animations and accurate geospatial rendering.",
    abstract: "Earthquake data can be difficult to interpret in traditional lists or tables. This project presents real-time seismic activity on an interactive map, allowing users to filter by time range, magnitude, and map type. With dynamic visualizations, smooth animations, and intuitive controls, it helps users easily explore global earthquake patterns and gain insights into seismic trends.",
    features: [
      "Interactive map to explore global earthquakes in real time",
      "Option to filter earthquakes by magnitude levels and time ranges",
      "Supports multiple map views including street, satellite, terrain, and dark mode",
      "Color-coded markers to visually differentiate earthquake severity",
      "Detailed popups showing magnitude, depth, location, and timestamp",
      "Real-time data fetching from USGS to keep events always up to date",
      "Responsive design ensuring smooth usage on both mobile and desktop devices"
    ],
    contributions: [
      "Developed the frontend using React with TypeScript for improved type safety",
      "Integrated Leaflet and React-Leaflet to build an interactive and high-performance map",
      "Implemented magnitude and time-range filtering with dynamic rendering",
      "Configured multiple map layers including satellite, terrain, and dark modes",
      "Added color-coded markers and structured popup components based on earthquake data",
      "Connected the application to the USGS GeoJSON API for live seismic data fetching",
      "Built a responsive UI using TailwindCSS for consistent cross-device experience"
    ],
    liveLink: "https://geoquake-earthquake-visualizer.vercel.app/",
    gitLink: "https://github.com/vctr1912/earthquake-visualizer",
    techStack: ["React", "TypeScript", "TailwindCSS", "React-Leaflet", "USGS GeoJSON API"],
    images: [
      "/assets/earth/1.webp",
      "/assets/earth/2.webp",
      "/assets/earth/3.webp",
      "/assets/earth/4.webp"
    ]
  },

  {
    id: 4,
    title: "Web Series Explorer",
    type: "Mobile",
    year: 2025,
    thumbnail: "/assets/show/thumb.webp",
    description: "A modern mobile app that helps users discover web series through searching and fetching data from trending categories and ratings. Built with an emphasis on UI aesthetics and fast search performance, offering an enjoyable browsing experience.",
    abstract: "Users often struggle to discover new web series due to scattered information and inconsistent sources. This app provides a clean, fast interface that allows users to search and fetch series data from trending lists and ratings powered by TVmaze, delivering an enjoyable and seamless browsing experience.",
    features: [
      "Clean and fast interface for exploring web series effortlessly",
      "Instant search functionality to quickly find shows from the TVmaze database",
      "Auto-fetching of popular and top-rated shows on initial load",
      "Dedicated show details page with cast information and ratings",
      "Smooth browsing experience with responsive layouts and well-structured content",
      "Reliable data retrieval powered by the TVmaze public API"
    ],
    contributions: [
      "Developed the app using React Native with a focus on clean UI and seamless navigation",
      "Integrated TVmaze API for live search results and detailed show information",
      "Implemented a reusable custom hook (useFetch) for handling data fetching, loading states, and error management",
      "Built modular API functions for searching shows, fetching top-rated shows, and retrieving show details with cast",
      "Optimized API responses by sorting and structuring data before rendering",
      "Ensured smooth user experience across devices with responsive and well-optimized layouts"
    ],
    liveLink: "https://example.com",
    gitLink: "https://github.com/example",
    techStack: ["React Native", "TypeScript", "NativeWind", "TVmaze API"],
    images: ["/assets/show/1.webp", "/assets/show/2.webp"]
  }
];
