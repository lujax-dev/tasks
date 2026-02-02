import { Hono } from "hono";

export const tasksRouter = new Hono();

const fakeTasks = [{
    id: 1,
    userId: null,
    title: 'add new feature',
    description: 'long desc'
}]

tasksRouter
    .get('/', (c) => {
        return c.json(fakeTasks);
    })
    .get('/:id', (c) => {
        const { id } = c.req.param();
        const task = fakeTasks[Number.parseInt(id) - 1];

        if (!task) {
            return c.notFound()
        } 

        return c.json(task)
    })
    .post('/', async (c) => {
        const newTask = await c.req.json();
        fakeTasks.push(newTask);

        return c.json({
            message: 'Task created successfully',
            data: newTask
        })
    })