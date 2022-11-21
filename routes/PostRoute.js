import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/PostController.js'
const router = express.Router()

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/', getPosts)

export default router