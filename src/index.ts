import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => {
	return c.json({
		message: 'Hello from git actions!', 
	})
})

export default app