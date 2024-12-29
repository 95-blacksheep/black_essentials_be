const {Router} = require('express')

const {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} = 
require("../controllers/userController")

const authMiddleware = require('../middleware/authMiddleware')


const router = Router()


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/:id', getUser)
router.post('/change_avatar', authMiddleware, changeAvatar)
router.patch('/edit_user', editUser)
router.get('/', getAuthors)




module.exports = router 



