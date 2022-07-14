import express from 'express';
import { createPost, getPosts, getPost, deletePost, updatePost, likePost } from '../controllers/posts.js';

const router = express.Router();

//GET Post
router.get('/', getPosts);

//GET: Single Post by ID
router.get('/:id', getPost);

//POST: create Route
router.post('/create', createPost);

//PUT: Update Route
router.put('/update/:id', updatePost);

//Delete: Delete Route
router.delete('/delete/:id', deletePost);

//Patch: Like Post Route
router.patch('/:id/likes', likePost);

export default router;
