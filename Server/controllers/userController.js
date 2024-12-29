const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const User = require('../models/userModel')
const HttpError = require("../models/errorModel")


// -------- Register New User
// POST : api/users/register
// UNPROTECTED

const registerUser = async (req, res, next) => {
    try {
        const {name, email, password, confirm_password} = req.body;
        if (!name || !email || !password) {
            return next(new HttpError("Fill In All Fields!", 422))
        }

        // convert all email characters to .toLowerCase()
        const newEmail = email.toLowerCase()

        // check email availability
        const emailExists = await User.findOne({email: newEmail})
        if (emailExists) {
            return next(new HttpError("Email Unavailable!", 422))
        }

        // validate password to be more than 6 chars
        if ((password.trim()).length < 6) {
            return next(new HttpError("Password Should Be a Minimum of 6 Characters!", 422))
        }

        // validate passwords match
        if (password != confirm_password) {
            return next(new HttpError("Passwords Do Not Match!", 422))
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // use defined variables (email && password)
        const newUser = await User.create({name, email: newEmail, password: hashedPassword})

        res.status(201).json(`${newUser.name} Added Successfully.`)
    } 
    
    catch (error) {
        return next(new HttpError("User Registration Failed!", 422))
    }
}












// -------- Login  User
// POST : api/users/login
// UNPROTECTED

const loginUser = async (req, res, next) => {
    try {
        // both password && email empty ??
        const {email, password} = req.body;
        if (!email || !password) {
            return next(new HttpError("Fill In All Fields!", 422))
        }

        // convert email input to .toLowerCase()
        const newEmail = email.toLowerCase();

        // fetch associated user
        const user = await User.findOne({email: newEmail}) 
            if (!user) {
                return next(new HttpError("User Unavailable!", 422))
            }
        

            // compared password
            const comparePassword = await bcrypt.compare(password, user.password)
            if (!comparePassword) {
                return next(new HttpError("Invalid Password!", 422))
            }


            // extract user details for token binding 
            const {_id: id, name} = user;
            //generate token
            const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: "1d"})


            //response if all is true
            res.status(200).json({token, id, name})
            
    } catch (error) {
        return next(new HttpError("Login Failed!", 422))
    }
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


