import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory data store
  let blogPosts = [
    { 
      id: 1, 
      title: 'Building a Full-Stack AI Application with React and Express', 
      excerpt: 'Learn how to integrate machine learning models seamlessly into modern web apps...',
      content: 'Integrating AI models into a full-stack application requires a solid architecture. In my recent work at PEC, I used Streamlit for quick prototyping, but scaling it meant moving to a Node.js backend. This allows for better connection pooling, caching, and serving multiple clients without blocking the main thread. We used YOLOv5 and MediaPipe for realtime inference...', 
      date: '2026-06-15' 
    },
    { 
      id: 2, 
      title: 'Optimizing React Apps for Performance', 
      excerpt: 'Tips and tricks to reduce load times and improve the user experience.',
      content: 'While building the Airbnb clone, one of the biggest challenges was state management and rendering speed. Implementing Redux helped keep the global state predictable, but we also had to lazy-load routes and optimize our MongoDB queries to reduce the average page load time by 40%...', 
      date: '2026-05-20' 
    }
  ];
  let messages: any[] = [];

  // API Routes
  app.get('/api/blog', (req, res) => {
    res.json(blogPosts);
  });

  app.post('/api/blog', (req, res) => {
    const { title, excerpt, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Missing title or content' });
    
    const newPost = { 
      id: Date.now(), 
      title, 
      excerpt: excerpt || content.substring(0, 100) + '...',
      content, 
      date: new Date().toISOString().split('T')[0] 
    };
    
    blogPosts.unshift(newPost);
    res.status(201).json(newPost);
  });

  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
    
    messages.push({ name, email, message, date: new Date() });
    console.log('New Contact Message Received:', { name, email, message });
    
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
