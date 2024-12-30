
const {Router} = require('express')

const {createPost, getPosts, getCatPosts, getPost, getUserPosts, editPost, deletePost}
= require('../controllers/postController')

const authMiddleware = require('../middleware/authMiddleware')

const router = Router()




router.get('/', (req, res, next) => {
    router.post('/', authMiddleware, createPost)
    router.get('/', getPosts)
    router.get('/categories/:category', getCatPosts)
    router.patch('/:id', authMiddleware, editPost)
    router.get('/users/:id', getUserPosts)
    router.delete('/:id', authMiddleware, deletePost)
    router.get('/:id', getPost)

})


module.exports = router 

















