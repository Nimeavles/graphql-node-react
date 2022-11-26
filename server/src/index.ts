import express from 'express';
import morgan from 'morgan';

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

//Middlewares
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000 🚀');
});