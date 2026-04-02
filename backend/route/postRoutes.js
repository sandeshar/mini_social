import express from 'express';
import { canEditOrDelete, createPost, deletePost, getAllPost, getPost, updatePost } from '../controller/postController';
import { checkAuth, optionalAuth } from '../middleware/authCheck';
import { upload } from '../lib/multer';

const postRouter = express.Router();

postRouter.get('/canEdit/:id', checkAuth, canEditOrDelete);
postRouter.get('/', optionalAuth, getAllPost)
postRouter.get('/:id', getPost)
postRouter.post('/', checkAuth, upload.single('imageURL'), createPost)
postRouter.put('/:id', checkAuth, upload.single('imageURL'), updatePost)
postRouter.delete('/:id', checkAuth, deletePost);

export default postRouter;