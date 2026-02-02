import { Hono } from "hono";

export const userRouter = new Hono();

const fakeUsers = [{
    id: 1,
    username: 'lewie',
    email: 'lewie@example.com'
}];

userRouter
    .get('/', (c) => {
        return c.json(fakeUsers);
    })
    .get('/:id', (c) => {
        const { id } = c.req.param();
        const user = fakeUsers[Number.parseInt(id) - 1];

        if (!user) {
            return c.notFound();
        } 
        return c.json(user) ;
    })
    .post('/', async (c) => {
        const newUser = await c.req.json();
        fakeUsers.push(newUser);

        return c.json({
            message: 'User created successfully',
            data: newUser
        })
    })