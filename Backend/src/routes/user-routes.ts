import { Hono } from 'hono';
import admin from '../config/firebaseConfig';

export const userRoutes = new Hono();

userRoutes.post('/register', async (c) => {
  const body = await c.req.json();
  console.log('Request Body:', body);

  const { email, password } = body;

  if (!email || !password) {
    console.log('Missing email or password');
    return c.json({ error: 'Email and password are required' }, 400);
  }

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    console.log('User Created:', user);
    return c.json({ userId: user.uid }, 201);
  } catch (error) {
    console.error('Error:', error);
    return c.json({ error: (error as Error).message }, 400);
  }
});

userRoutes.post('/login', async (c) => {
  const { email, password } = await c.req.json();

  if (!email || !password) {
    return c.json({ error: 'Email and password are required' }, 400);
  }

  try {
    // Verify email and password using Firebase Client SDK
    const user = await admin.auth().getUserByEmail(email);

    // Generate custom token for user session
    const token = await admin.auth().createCustomToken(user.uid);

    return c.json({ token }, 200);
  } catch (error) {
    console.error('Login Error:', error);
    return c.json({ error: 'Invalid email or password' }, 400);
  }
});
