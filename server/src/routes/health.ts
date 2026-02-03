import { Hono } from "hono";

export const healthRouter = new Hono();

healthRouter.get('/', (c) => {
    return c.json({
        status: 'ok',
        service: 'api',
        runtime: 'bun',
        uptimeSeconds: Math.floor(process.uptime()),
        timestamp: new Date().toISOString()
    }, 200)
})