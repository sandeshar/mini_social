import express from 'express';
import userRouter from './route/userRoutes.js';
import postRouter from './route/postRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("secret"));

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.listen(PORT, () => {
    console.log(`Server Running at: http://localhost:${PORT}`);
})