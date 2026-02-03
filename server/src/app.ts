import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors';
import { userRouter } from './routes/users';
import { tasksRouter } from './routes/tasks';

const app = new Hono()

// Middleware
app.use(cors({
    origin: 'http://localhost:5173/'
}));
app.use(logger());

// Routes
app.route('/api/users', userRouter);
app.route('/api/tasks', tasksRouter)

export default app
