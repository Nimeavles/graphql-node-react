import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { apolloServer as server } from './routes/schema';
import morgan from 'morgan';
import cors from 'cors';

//Instance the app
const app = express();

//Middelwares
app.use(express.json())
server.start()
  .then(() => app.use('/graphql', cors(), expressMiddleware(server)));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//Run the app
app.listen(3000, () => {
  console.log("App listening on port 3000 🚀")
});
