// export const courses = [
//   {
//     id: "1",
//     title: "Node.js & Express Backend Development",
//     shortDescription: "Learn to build scalable REST APIs using Node.js and Express.",
//     previewImage: "/images/node-express.jpg",
//     rating: 4.7,
//     reviews: 15000,
//     whatYouWillLearn: [
//       "Fundamentals of Node.js and server‑side JavaScript",
//       "Build RESTful APIs with Express",
//       "Connect to MongoDB with Mongoose",
//       "Implement authentication & validation",
//       "Error handling and TDD with unit/integration tests",
//       "Deploy Node applications with environment configuration"
//     ],
//     courseIncludes: [
//       "15 hours on-demand video",
//       "220 lessons",
//       "Downloadable content",
//       "Hands‑on exercises",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "Basic JavaScript knowledge",
//       "No prior backend experience needed"
//     ],
//     longDescription: `This backend development course guides you through Node.js, Express & MongoDB from beginner to pro. Learn RESTful API design, advanced middleware, user authentication, and test‑driven development with real project examples and deployment.`
//   },
//   {
//     id: "2",
//     title: "Django for Backend Development",
//     shortDescription: "Build secure web backends using Python Django and REST APIs.",
//     previewImage: "/images/django-backend.jpg",
//     rating: 4.6,
//     reviews: 10000,
//     whatYouWillLearn: [
//       "Understand Django architecture and MTV design pattern",
//       "Use Django ORM and manage models/migrations",
//       "Build RESTful endpoints with Django REST Framework",
//       "Implement JWT authentication and secure API",
//       "Optimize performance with caching & Redis",
//       "Automated testing with pytest and deployment best practices"
//     ],
//     courseIncludes: [
//       "15 hours of content",
//       "300 lessons across 3 modules",
//       "Downloadable resources",
//       "Hands‑on coding assignments",
//       "Lifetime access and certificate"
//     ],
//     requirements: [
//       "Basic Python knowledge",
//       "SQL or database fundamentals helpful"
//     ],
//     longDescription: `The Ultimate Django Series takes you from zero to hero in web backend development using Django and MySQL. You’ll build a production-ready e-commerce API with authentication, caching, asynchronous tasks, and best practices.`
//   },
//   {
//     id: "3",
//     title: "Data Analytics with Python",
//     shortDescription: "Master Pandas, NumPy, and visualization for real-world analytics.",
//     previewImage: "/images/data-analytics.jpg",
//     rating: 4.8,
//     reviews: 22000,
//     whatYouWillLearn: [
//       "Data manipulation with Pandas & NumPy",
//       "Cleaning, filtering, and aggregating datasets",
//       "Visualize trends using Matplotlib & Seaborn",
//       "Perform exploratory data analysis (EDA)",
//       "Present insights with dashboards or reports"
//     ],
//     courseIncludes: [
//       "30 hours of video",
//       "150 lectures",
//       "Hands‑on exercises",
//       "Downloadable Jupyter notebooks",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "Basic Python knowledge",
//       "Familiarity with Excel or spreadsheets helps"
//     ],
//     longDescription: `This comprehensive course teaches you how to analyze and visualize data using Python libraries like Pandas and Seaborn. You'll handle real datasets, conduct exploratory analysis, and create actionable insights.`
//   },
//   {
//     id: "4",
//     title: "Master React Development",
//     shortDescription: "Become a React expert building real-world web applications.",
//     previewImage: "/images/react-course.jpg",
//     rating: 4.8,
//     reviews: 19540,
//     whatYouWillLearn: [
//       "Core React JS fundamentals and Hooks",
//       "State management with Context API and Redux",
//       "Routing using React Router",
//       "REST API integration with Axios",
//       "UseEffect, useState, and lifecycle patterns",
//       "Performance optimization and production deployment"
//     ],
//     courseIncludes: [
//       "40 hours of video",
//       "200 lectures",
//       "Code samples & exercises",
//       "Deploying apps to production",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "JavaScript fundamentals (ES6+)",
//       "HTML and CSS basics"
//     ],
//     longDescription: `Learn how to build dynamic and responsive user interfaces using React, manage state, and connect to backends. Includes real-world projects and deployment workflows.`
//   },
//   {
//     id: "5",
//     title: "UI/UX Design for Beginners",
//     shortDescription: "Learn design fundamentals, Figma, and user-first workflows.",
//     previewImage: "/images/uiux-course.jpg",
//     rating: 4.7,
//     reviews: 8120,
//     whatYouWillLearn: [
//       "UI/UX design fundamentals and principles",
//       "Prototyping with Figma",
//       "Wireframing and user flow creation",
//       "Conduct user research and usability testing",
//       "Design systems and component libraries",
//       "Handoff to developers and collaboration"
//     ],
//     courseIncludes: [
//       "25 hours of video",
//       "120 lectures",
//       "Design assets & templates",
//       "Project-based portfolio",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "No design experience needed",
//       "Willingness to practice design principles"
//     ],
//     longDescription: `This course teaches you the essentials of user-centered design using Figma. You’ll create wireframes, test usability, and develop polished prototypes suitable for real-world projects.`
//   },
//   {
//     id: "6",
//     title: "Android Development with Kotlin",
//     shortDescription: "Build native Android apps using Kotlin and modern tools.",
//     previewImage: "/images/android-course.jpg",
//     rating: 4.6,
//     reviews: 12300,
//     whatYouWillLearn: [
//       "Kotlin syntax and Android fundamentals",
//       "Build UI using Jetpack Compose",
//       "Manage app navigation and state",
//       "Consume REST APIs with Retrofit",
//       "Local storage with Room database",
//       "Testing and publishing to Google Play store"
//     ],
//     courseIncludes: [
//       "50 hours of video",
//       "250 lectures",
//       "Code repositories & exercises",
//       "Play Store deployment guide",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "Basic Java or programming knowledge",
//       "Android Studio installed"
//     ],
//     longDescription: `Learn how to build production-ready Android apps using Kotlin and Jetpack Compose. From UI design to API integration and deploying to Google Play.`
//   },
//   {
//     id: "7",
//     title: "Learn JAVA Programming – Beginner to Master",
//     shortDescription: "130+ hours of expert Java lessons, perfect for OOP and job-ready skills.",
//     previewImage: "/images/java-masterclass.jpg",
//     rating: 4.6,
//     reviews: 208550,
//     whatYouWillLearn: [
//       "Core Java fundamentals and OOP concepts",
//       "Write problem-solving exercises and coding assignments",
//       "Understand Java Collections, Generics & Streams",
//       "Prepare for Oracle Java Certification",
//       "Build real-world projects using Java 17",
//       "Learn modern Java features including new APIs"
//     ],
//     courseIncludes: [
//       "135 hours on-demand video",
//       "50 coding exercises",
//       "361 downloadable resources",
//       "Access on mobile and TV",
//       "Certificate of completion"
//     ],
//     requirements: [
//       "No prior Java experience required",
//       "Eagerness to code and learn"
//     ],
//     longDescription: `Step into the world of programming with our Java Programming Masterclass, meticulously updated for 2024. Join over 832,000 students and learn core Java, OOP, real-world projects, and certification prep—all in one course. Lifetime access included.`
//   }
// ];


export const courses = [
  {
    id: "1",
    title: "Data Engineer",
    shortDescription: "Design, build, and manage scalable data pipelines and infrastructure.",
    previewImage: "/data-engineer.png",
    rating: 4.8,
    reviews: 12500,
  },
  {
    id: "2",
    title: "BI Developer",
    shortDescription: "Create interactive dashboards and business intelligence solutions.",
    previewImage: "/bi-developer.png",
    rating: 4.6,
    reviews: 9800,
  },
  {
    id: "3",
    title: "Data Analyst",
    shortDescription: "Analyze datasets to uncover trends and drive business insights.",
    previewImage: "/data-analyst.png",
    rating: 4.7,
    reviews: 14300,
  },
  {
    id: "4",
    title: "Database Developer",
    shortDescription: "Design and optimize database systems for high performance and reliability.",
    previewImage: "/database-developer.jpeg",
    rating: 4.5,
    reviews: 8600,
  },
];
