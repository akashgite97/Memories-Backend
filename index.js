import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//Routes
app.use('/posts', postRoutes);

//middlewares

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//DB connection
mongoose.connect('mongodb+srv://skydev:skydev@memories.fb2gl.mongodb.net/?retryWrites=true&w=majority', () =>
  console.log('DB connectd successfully')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfully on ${PORT}`);
});
