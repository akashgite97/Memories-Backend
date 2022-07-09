import express from 'express';
import { createPost, getPosts, getPost, deletePost, updatePost } from '../controllers/posts.js';

const router = express.Router();

//GET Post
router.get('/', getPosts);

//GET: SIngle Post
router.get('/:id', getPost);

//POST: create Route
router.post('/create', createPost);

//PUT: Update Route
router.put('/update/:id', updatePost);

//Delete: Delete Route
router.delete('/delete/:id', deletePost);



export default router;
