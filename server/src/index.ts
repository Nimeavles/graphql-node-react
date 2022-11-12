import express, { Response, Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("App listening on port 3000 🚀")
})
