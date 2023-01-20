import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'
import model from './models/index.js'
import mongoose from 'mongoose';

// initialze with express app
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
routes(app);
// connect to given db
mongoose.connect('mongodb://localhost:27017/reacttodo').then(()=>{
  //console.log('starting on port 8080');
});

export default app;