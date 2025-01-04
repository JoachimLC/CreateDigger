import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import { spotifyRoutes } from './routes/spotify';

dotenv.config();

const app = new Hono();

app.route('/api/spotify', spotifyRoutes);

app.get('/', (c) => c.text('Welcome to the Hono Spotify API!'));

serve(app);
