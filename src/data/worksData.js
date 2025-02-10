export const worksData = {
  projects: [
    {
      id: "stock-dojo",
      title: "Stock Dojo - Educational Trading Platform",
      category: "Full Stack Development",
      description:
        "Led frontend development for an educational stock market simulator that allows students to learn trading in a risk-free environment. The platform features real-time stock data, portfolio management, and classroom integration for educational purposes.",
      problemStatement:
        "Create an engaging, educational platform where students can learn about stock market trading through hands-on experience without financial risk, while allowing educators to manage and monitor student progress.",
      role: "Frontend Lead Developer",
      technologies: [
        "Android Development",
        "Java/Kotlin",
        "RESTful APIs",
        "Real-time Data Integration",
        "UI/UX Design",
      ],
      highlights: [
        "Implemented multi-portfolio management system",
        "Created real-time stock search and research interface",
        "Developed classroom management features for educators",
        "Built interactive trading interface with real market data",
        "Designed responsive layouts for various screen sizes",
      ],
      challenges: [
        "Managing complex state across multiple portfolios",
        "Implementing real-time data updates efficiently",
        "Creating intuitive UI for complex financial information",
        "Integrating educational features with trading functionality",
      ],
      impact:
        "Developed a comprehensive platform that enables students to gain practical experience in stock trading while providing educators with tools to guide and monitor their learning progress.",
      image: "/images/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/stock-dojo",
      features: [
        "Multiple portfolio management",
        "Real-time stock data and metrics",
        "Classroom announcement system",
        "Student-teacher communication",
        "Portfolio performance tracking",
      ],
    },
    {
      id: "checkers-ai",
      title: "Checkers AI with Monte Carlo Tree Search",
      category: "Artificial Intelligence",
      description:
        "Developed an AI agent capable of playing American checkers against human players using Monte Carlo Tree Search (MCTS). The AI evaluates game states through iterative simulation to make strategic decisions in real-time.",
      problemStatement:
        "Create an intelligent checkers-playing agent that can compete against human players by implementing the Monte Carlo Tree Search algorithm, which required balancing exploration and exploitation in game state evaluation.",
      role: "Solo Developer",
      technologies: [
        "Java",
        "Monte Carlo Tree Search",
        "Game Theory",
        "Data Structures",
      ],
      highlights: [
        "Implemented four key MCTS components: selection, expansion, simulation, and back-propagation",
        "Developed move validation and game state management systems",
        "Implemented UCB1 formula for balancing exploration and exploitation",
        "Handled complex game rules including mandatory jumps and king pieces",
      ],
      challenges: [
        "Optimizing the MCTS algorithm's performance for real-time gameplay",
        "Implementing complex game rules including mandatory multi-jumps",
        "Creating an efficient game state representation and move generator",
        "Balancing AI decision-making time with user experience",
      ],
      impact:
        "Successfully created an AI opponent that makes strategic decisions in real-time, providing an engaging gaming experience while demonstrating practical applications of game theory and AI algorithms.",
      image: "/images/checkers.jpg",
      githubUrl: "https://github.com/blake-nelson-dev/java-checkers-ai",
    },
    {
      id: "movie-database",
      title: "(ADD INFO) Interactive Movie Database",
      category: "Full Stack Development",
      description:
        "Developed a responsive movie database website with features similar to IMDB, utilizing React for the frontend and Node.js for the backend. The application integrates with external movie APIs to provide comprehensive movie information.",
      problemStatement:
        "Create a modern, user-friendly movie information platform that allows users to browse, search, and interact with movie data in real-time.",
      role: "Full Stack Developer",
      technologies: [
        "React",
        "Node.js",
        "RESTful API",
        "JavaScript",
        "HTML/CSS",
      ],
      highlights: [
        "Built responsive user interface with React",
        "Implemented RESTful API with Node.js",
        "Integrated external movie data APIs",
        "Created efficient search functionality",
      ],
      challenges: [
        "Managing state across multiple components",
        "Optimizing API calls for performance",
        "Implementing responsive design",
        "Handling asynchronous data loading",
      ],
      impact:
        "Created a fully functional movie database platform that demonstrates full-stack development capabilities and modern web development practices.",
      image: "/images/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/movie-database",
    },
    {
      id: "imdb-games-analysis",
      title: "Video Game Ratings Analysis",
      category: "Data Science",
      description:
        "Developed a comprehensive analysis of video game ratings using machine learning models to identify patterns and predict game ratings based on various features including genres, certificates, and other attributes.",
      problemStatement:
        "Analyze and predict video game ratings using multiple machine learning models to understand what factors contribute most to a game's success on IMDB.",
      role: "Data Scientist",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Seaborn",
        "NumPy",
        "PCA",
      ],
      highlights: [
        "Implemented multiple ML models including KNN, Decision Trees, Logistic Regression, and SVC",
        "Performed dimensionality reduction using PCA for better visualization",
        "Created comprehensive data visualizations using Seaborn",
        "Conducted feature engineering on categorical and numerical data",
        "Used Stratified K-Fold cross-validation for model evaluation",
      ],
      challenges: [
        "Handling missing and duplicate data in the dataset",
        "Converting categorical variables into numerical features",
        "Balancing model complexity with prediction accuracy",
        "Implementing proper cross-validation techniques",
      ],
      impact:
        "Successfully identified key factors influencing video game ratings and created a model to predict rating scores, achieving significant accuracy through model comparison and selection.",
      image: "/images/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/imdb-games-analysis",
    },
    {
      id: "crypto-prediction",
      title: "Cryptocurrency Price Prediction Using ML",
      category: "Data Science",
      description:
        "Developed and compared multiple machine learning models to predict cryptocurrency prices using historical data from Yahoo Finance. The project evaluated different approaches including Linear Regression, Random Forest, SVR, Neural Networks, and more.",
      problemStatement:
        "Create an efficient and accurate prediction model for cryptocurrency prices that could work with limited computational resources while maintaining good prediction accuracy.",
      role: "Machine Learning Engineer (Team of 3)",
      technologies: [
        "Python",
        "Scikit-learn",
        "Neural Networks",
        "Yahoo Finance API",
        "Pandas",
        "Matplotlib",
      ],
      highlights: [
        "Implemented and compared 6 different ML models including Linear Regression, Random Forest, SVR, KNN, Decision Tree, and Neural Networks",
        "Achieved best performance with Linear Regression, demonstrating that simpler models can be effective",
        "Created comprehensive visualizations comparing model predictions",
        "Analyzed historical cryptocurrency price data with 86/14 train-test split",
        "Achieved predictions within $15 margin of error using Linear Regression",
      ],
      challenges: [
        "Handling the high volatility of cryptocurrency prices",
        "Optimizing model performance with limited computational resources",
        "Implementing and comparing multiple ML algorithms effectively",
        "Processing and cleaning large-scale financial data",
      ],
      impact:
        "Successfully demonstrated that simple models like Linear Regression can perform comparably to more complex approaches in cryptocurrency price prediction, providing a foundation for practical real-time prediction systems.",
      image: "/images/placeholder.jpg",
      githubUrl: "your-github-url",
    },
    {
      id: "nba-analysis",
      title: "NBA Player Statistics Analysis",
      category: "Data Science",
      description: "Conducted comprehensive analysis of NBA player statistics spanning over three decades to identify key success factors, geographical trends, and performance indicators in professional basketball.",
      problemStatement: "Analyze multiple factors influencing NBA player success including birthplace demographics, physical attributes, and performance metrics to uncover patterns and correlations that could predict player success.",
      role: "Data Scientist (Team of 2)",
      technologies: [
        "R",
        "ggplot2",
        "tidyverse",
        "dplyr",
        "Data Visualization",
        "Statistical Analysis"
      ],
      highlights: [
        "Analyzed correlation between player physical attributes and career longevity",
        "Discovered significant geographical patterns in NBA player development",
        "Evaluated relationships between performance metrics and salary",
        "Created comprehensive visualizations including correlation plots and geographic distributions",
        "Identified key performance indicators for NBA success"
      ],
      challenges: [
        "Cleaning and merging multiple complex datasets",
        "Handling missing data and outliers",
        "Creating meaningful visualizations for multi-dimensional data",
        "Normalizing historical salary data for fair comparison"
      ],
      impact: "Provided insights into NBA talent development patterns, including the influence of geography on player development and the relationship between physical attributes and career success. Found that city population size significantly correlates with NBA talent production.",
      image: "/images/placeholder.jpg",
      githubUrl: "your-github-url"
    },
    {
      id: "ssrs-scanner",
      title: "SSRS Report Scanner",
      category: "Enterprise Software",
      description: "Developed a Python-based tool for analyzing and formatting SQL Server Reporting Services (SSRS) reports, featuring comprehensive analysis of SQL queries, report structures, and formatting standards.",
      problemStatement: "Create an automated tool to analyze SSRS reports for SQL patterns and enforce formatting standards across enterprise reporting, improving consistency and maintainability of report designs.",
      role: "Solo Developer",
      technologies: [
        "Python",
        "SQL Analysis",
        "Excel API",
        "SSRS",
        "Data Analysis",
        "Pattern Recognition"
      ],
      highlights: [
        "Implemented two operational modes: Analysis and Format checking",
        "Created correlation analysis for SQL patterns across reports",
        "Developed automated formatting validation for enterprise standards",
        "Built dynamic Excel report generation with multiple analysis views",
        "Implemented Apriori algorithm for advanced pattern detection"
      ],
      challenges: [
        "Processing complex SQL queries and identifying patterns",
        "Implementing efficient report correlation analysis",
        "Creating a user-friendly interface for enterprise users",
        "Handling large-scale report analysis with optimal performance",
        "Developing configurable standards validation"
      ],
      impact: "Significantly improved report standardization and reduced manual review time for SSRS reports. Provided insights into SQL patterns and potential optimizations across the reporting infrastructure.",
      image: "/images/placeholder.jpg",
      githubUrl: "your-github-url"
    },
    {
      id: "lidar-analysis",
      title: "LIDAR Point Cloud Analysis & Watershed Simulation",
      category: "Scientific Computing",
      description: "Developed a C-based application for analyzing LIDAR point cloud data and simulating water flow over terrain, featuring data visualization and watershed analysis capabilities.",
      problemStatement: "Create a system to analyze high-resolution LIDAR terrain data and simulate water flow patterns to identify potential water pooling areas in geographic regions.",
      role: "Developer",
      technologies: [
        "C",
        "LIDAR Data Processing",
        "GIF Image Generation",
        "Data Structures",
        "Bitmap Manipulation",
        "Scientific Computing"
      ],
      highlights: [
        "Implemented efficient point cloud data processing algorithms",
        "Created dynamic water flow simulation over terrain",
        "Developed visualization system for terrain and water depth",
        "Built extensible data structures for large-scale data handling",
        "Integrated logarithmic scaling for improved visualization"
      ],
      challenges: [
        "Processing large-scale point cloud datasets efficiently",
        "Implementing complex water flow physics simulations",
        "Creating effective visualizations of multi-dimensional data",
        "Optimizing memory usage for large terrain datasets",
        "Developing accurate water accumulation algorithms"
      ],
      impact: "Successfully created a tool for analyzing terrain data and predicting water flow patterns, providing valuable insights for geographic analysis and potential flood prediction.",
      image: "/images/placeholder.jpg",
      githubUrl: "your-github-url"
    },
    {
      id: "drone-safety",
      title: "Drone Safety Certificate Generator",
      category: "Research Projects",
      description: "Developing a system to generate safety certificates for small Uncrewed Aerial Systems (sUAS) operations, helping drone pilots assess and document flight readiness using software product line engineering principles.",
      problemStatement: "Create a robust system for drone pilots to generate and manage safety certificates, ensuring safe operation in shared airspace by implementing formal safety case assessments using software product line engineering.",
      role: "Full Stack Developer",
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "AWS",
        "Software Product Line Engineering",
        "Safety Systems"
      ],
      highlights: [
        "Implementing software product line engineering for safety certificate generation",
        "Developing dynamic certificate generation based on flight conditions",
        "Creating AWS messaging system for certificate communication",
        "Building interactive UI for safety assessment workflows",
        "Integrating with existing aviation safety protocols"
      ],
      challenges: [
        "Implementing complex safety case logic for diverse flight scenarios",
        "Creating intuitive interfaces for technical safety assessments",
        "Integrating with AWS services for reliable communication",
        "Ensuring scalability for various drone types and operations",
        "Meeting aviation safety standards and requirements"
      ],
      impact: "This project aims to enhance drone flight safety by providing pilots with formal safety assessment tools, potentially reducing incidents in shared airspace.",
      image: "/images/placeholder.jpg",
      githubUrl: "your-github-url",
      status: "In Development"
    }
  ],
};
