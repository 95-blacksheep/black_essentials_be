// ------------- Get All Posts
// GET : api/posts
// UNPROTECTED
const getPosts = async (req, res, next) => {
    res.json("Get all posts")
}



// ------------- Create Post
// POST : api/posts
// UNPROTECTED
const createPost = async (req, res, next) => {
    res.json("Create new post")
}




// ------------- Get Single Post
// GET : api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
    res.json("Get single posts")
}






// ------------- Get Post By Category
// GET : api/posts/categories/:id
// UNPROTECTED
const getCatPosts = async (req, res, next) => {
    res.json("Get all posts by category")
}





// ------------- Get Posts By Author
// GET : api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
    res.json("Get all posts by users")
}




// ------------- Edit Posts
// PATCH : api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
    res.json("Edit post")
}



// ------------- Delete Posts
// DELETE : api/posts/:id
// PROTECTED
const deletePost = async (req, res, next) => {
    res.json("Delete post")
}







module.exports = {createPost, getPost, getPosts, getCatPosts, getUserPosts, editPost, deletePost}