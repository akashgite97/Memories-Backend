import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

//GET Post
router.get('/', getPosts);

//POST Route
router.post('/create', createPost);

export default router;
