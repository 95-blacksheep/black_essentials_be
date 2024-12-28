// -------- Register New User
// POST : api/users/register
// UNPROTECTED

const registerUser = async (req, res, next) => {
    res.json("Register User")
}




// -------- Login  User
// POST : api/users/login
// UNPROTECTED

const loginUser = async (req, res, next) => {
    res.json("Login User")
}





// --------  User Profile
// GET : api/users/:id
// PROTECTED

const getUser = async (req, res, next) => {
    res.json("User Profile")
}





// --------  User Avatar Change
// POST : api/users/change_avatar
// PROTECTED

const changeAvatar = async (req, res, next) => {
    res.json("Edit User Avatar")
}






// --------  Edit User 
// POST : api/users/edit_user
// PROTECTED

const editUser = async (req, res, next) => {
    res.json("Edit User")
}





// --------  Get All Authors/Users 
// GET : api/users/authors
// UNPROTECTED

const getAuthors = async (req, res, next) => {
    res.json("All Users")
}



module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}


