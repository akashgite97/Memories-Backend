import express from 'express';
import { createPost, getPosts, getPost, deletePost, updatePost, likePost } from '../controllers/posts.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

//GET Post
router.get('/allPosts', getPosts);

//GET: Single Post by ID
router.get('/:id', getPost);

//POST: create Route
router.post('/create',isAuthenticated, createPost);

//PUT: Update Route
router.put('/update/:id',isAuthenticated, updatePost);

//Delete: Delete Route
router.delete('/delete/:id',isAuthenticated, deletePost);

//Patch: Like Post Route
router.patch('/:id/like',isAuthenticated, likePost);

export default router;
