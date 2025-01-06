import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import { spotifyRoutes } from './routes/spotify-routes';
import { userRoutes } from './routes/user-routes';
dotenv.config();

const app = new Hono();

app.use('*', async (c, next) => {
    const allowedOrigin = 'http://localhost:5173'; // Exact origin, no trailing slash
  
    c.header('Access-Control-Allow-Origin', allowedOrigin); // Specific origin
    c.header('Access-Control-Allow-Credentials', 'true'); // Allow cookies
    c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    c.header('Vary', 'Origin'); // Ensure correct caching for dynamic origins
      
    // Handle preflight requests
    if (c.req.method === 'OPTIONS') {
      return c.text('', 204);
    }
  
    await next();
  });
  

app.route('/api/spotify', spotifyRoutes);
app.route('/api/user', userRoutes);
  
serve(app);
