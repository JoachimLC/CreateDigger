import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello from Hono!'));

app.listen(3000, () => {
  console.log('Hono server running on http://localhost:3000');
});
