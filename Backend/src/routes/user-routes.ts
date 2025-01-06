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
    // Get the user by email
    const user = await admin.auth().getUserByEmail(email);

    // Generate a Custom Token
    const token = await admin.auth().createCustomToken(user.uid);

    // Send the Custom Token to the client
    return c.json({ token }, 200);
  } catch (error) {
    console.error('Login Error:', error);
    return c.json({ error: 'Invalid email or password' }, 400);
  }
});


userRoutes.get('/me', async (c) => {
  const token = c.req.header('cookie') || ''; // Use cookie to retrieve the ID Token

  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await admin.auth().getUser(decodedToken.uid);

    return c.json({
      email: user.email,
      uid: user.uid,
    });
  } catch (error) {
    console.error('Error verifying user:', error);
    return c.json({ error: 'Unauthorized' }, 401);
  }
});


userRoutes.post('/logout', async (c) => {
  c.header('Set-Cookie', 'token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;');
  return c.json({ message: 'Logged out successfully' }, 200);
});
