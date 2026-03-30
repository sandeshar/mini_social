import express from 'express';
import { createPost, getAllPost, getPost } from '../controller/postController';
import { checkAuth } from '../middleware/authCheck';

const postRouter = express.Router();

postRouter.get('/', getAllPost)
postRouter.get('/:id', getPost)
postRouter.post('/', checkAuth, createPost)

export default postRouter;