import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { userRouter } from './routes/users';

const app = new Hono()

// Middleware
app.use(logger());

// Routes
app.route('/api/users', userRouter)

export default app
