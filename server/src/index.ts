import express from 'express';
import { expressMiddleware } from '@apollo/server/express4'
import morgan from 'morgan';
import cors from 'cors';
import { server } from './routes';

const app = express();

const corsOptions = {
  origin: 'http://localhost:4000',
};

//Middlewares
server.start()
  .then(() => app.use('/graphql', cors(corsOptions), expressMiddleware(server)));
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000 🚀');
});