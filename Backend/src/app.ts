import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import { spotifyRoutes } from './routes/spotify-routes';
import { userRoutes } from './routes/user-routes';
import { cors } from 'hono/cors';
dotenv.config();

const app = new Hono();

app.use('*', cors());

app.route('/api/spotify', spotifyRoutes);
app.route('/api/user', userRoutes);
  
serve(app);
