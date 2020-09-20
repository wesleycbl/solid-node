import express from 'express';
import { router } from './routes';

const app = express()

app.use(express.json())
app.use(router)

// uma forma de referenciar em outros arquivos facilmente
export { app }