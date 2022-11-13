import express, { Response, Request } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("App listening on port 3000 🚀")
})
