import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

//use express as a function
const app = express();
dotenv.config();

// Add this code for maximun 30mb
app.use(bodyParser.json({ limit: '30mb', extended: true }))
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//routes
app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get('/', (req, res) => {
	res.send('MEMORIES API IS RUNNING');
});

//MongoDb URL and Port number
// const CONNECTION_URL = 'mongodb+srv://shihab123:shihab123@memories.5pdr4.mongodb.net/MERN_MEMORIES?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5020;

//Connect MongonDb and run server 
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
