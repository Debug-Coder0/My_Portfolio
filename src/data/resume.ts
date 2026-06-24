import { Experience, Project, Education } from '../types';

export const personalInfo = {
  name: "Nadir Siddiqui",
  role: "Software Engineer",
  email: "nadirsiddiqui092@gmail.com",
  phone: "+91-75280-14546",
  location: "Chandigarh, Punjab, India",
  github: "https://github.com/Debug-Coder0",
  linkedin: "https://www.linkedin.com/in/nadir-siddiqui-2ab92921b/",
  summary: "Motivated Computer Science (AI) undergraduate with hands-on experience building full-stack web applications using the MERN stack, RESTful APIs, and cloud-integrated systems. Proven ability to ship production-grade features — from React frontends to Node.js backends — with a strong foundation in performance optimization, authentication, and ML-powered services."
};

export const skills = {
  languages: ["JavaScript (ES6+)", "Python", "C++", "HTML5", "CSS3"],
  systems: ["Linux", "Git", "GitHub", "REST APIs", "Docker", "AWS"],
  frontend: ["React.js", "Redux", "Responsive Web Design"],
  backend: ["Node.js", "Express.js", "RESTful API Design", "MongoDB", "MySQL", "PostgreSQL"],
  ai: ["Prompt Engineering", "TensorFlow", "scikit-learn", "OpenCV"],
  tools: ["Postman", "VS Code", "Streamlit", "NumPy", "Pandas", "Matplotlib"]
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Google Student Ambassador",
    company: "Google",
    period: "Sep 2025 – Jan 2026",
    location: "Punjab, India",
    achievements: [
      "Organized and led technical workshops on cloud computing and web development, reaching 200+ students across campus events.",
      "Collaborated with Google engineering teams to design and deliver structured learning programs on Google developer tools and APIs.",
      "Mentored peers on modern tech stacks, career development, and open-source contribution, building a sustained developer community."
    ]
  },
  {
    id: 2,
    role: "AI Research Intern",
    company: "Punjab Engineering College (PEC)",
    period: "Jun 2025 – Jul 2025",
    location: "Chandigarh, India",
    achievements: [
      "Architected a full-stack AI inference platform using Streamlit (Python) as the frontend and integrated YOLOv5, DeepFace, and MediaPipe models into a unified backend pipeline achieving 92% accuracy.",
      "Engineered real-time media processing supporting images, video files, and live webcam streams with sub-100ms end-to-end latency via optimized server-side inference.",
      "Reduced model inference time by 30% through quantization and edge-deployment optimizations, improving scalability for concurrent users.",
      "Delivered a working MVP within a 2-month timeline, demonstrating ability to scope, build, and ship a full product under constraints."
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Airbnb Clone",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
    year: "2026",
    description: [
      "Built a full-stack Airbnb-inspired property rental platform with user authentication, property listings, search/filter functionality, and booking management.",
      "Implemented Redux for global state management and optimized MongoDB queries, reducing average page load time by 40%.",
      "Secured all API endpoints with JWT + bcrypt for token-based authentication and password hashing, following OWASP best practices.",
      "Designed a fully RESTful API layer (Express.js) with modular route controllers and middleware for auth, validation, and error handling."
    ]
  },
  {
    id: 2,
    title: "Cost Guardian",
    tech: ["React", "Node.js", "Express.js"],
    year: "2026",
    description: [
      "Built a full-stack expense management web app during Economics Times Hackathon to detect cost leakages and optimize organizational spending.",
      "Developed an intelligent dashboard in React that visualizes expense patterns, flags anomalous spending, and categorizes cost leakage areas in real time.",
      "Engineered a Node.js/Express backend that analyzes submitted expense data and returns AI-driven root cause analysis with actionable cost-reduction recommendations."
    ]
  },
  {
    id: 3,
    title: "Crop Detection & Weather Analytics",
    tech: ["Python", "TensorFlow", "React", "Node.js", "MySQL"],
    year: "2025",
    description: [
      "Built an end-to-end full-stack web application with a React dashboard and Node.js/Express backend serving 500+ API requests/day at 99.5% uptime.",
      "Integrated a third-party weather REST API and a CNN-based disease detection model (89% accuracy) into a unified backend service."
    ]
  },
  {
    id: 4,
    title: "AI Multi-Modal Recognition System",
    tech: ["Python", "YOLOv5", "Streamlit", "OpenCV", "MediaPipe"],
    year: "2025",
    description: [
      "Built a multi-model computer vision web app combining object detection, emotion recognition, and gesture detection in a single Streamlit interface.",
      "Optimized full inference pipeline for near-real-time performance (<100ms latency) and edge deployment readiness."
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "RIMT University",
    degree: "B.Tech in Computer Science (Artificial Intelligence)",
    period: "Aug 2023 – Aug 2027",
    location: "Chandigarh, India",
    cgpa: "8.0/10",
    coursework: "Data Structures & Algorithms, Web Development, Database Systems, Machine Learning, Operating Systems"
  }
];
