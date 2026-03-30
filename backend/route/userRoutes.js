import express from 'express';
import { getCurrentUser, getUsers, loginUser, registerUser } from '../controller/userController.js'
import { checkAuth } from '../middleware/authCheck.js';
const userRouter = express.Router();

userRouter.get('/', checkAuth, getUsers);
userRouter.get('/me', checkAuth, getCurrentUser);
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);

export default userRouter;