const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const fs = require('fs')
const path = require('path')
const {v4: uuid} = require("uuid")

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
            return next(new HttpError("Password Should Be A Minimum of 6 Characters!", 422))
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
    try {
        const {id} = req.params;
        // get user details without password
        const user = await User.findById(id).select('-password');
        if (!user) {
            return next(new HttpError("User Not Found!", 404))
        }

        res.status(200).json(user);
    } catch (error) {
        return next(new HttpError("Error Retrieving User!", 422))
    }
}









// --------  Get All Authors/Users 
// GET : api/users/authors
// UNPROTECTED

const getAuthors = async (req, res, next) => {
    try {
        const authors = await User.find().select('-password');
        res.json(authors);
    } catch (error) {
        return next(new HttpError("Error Retrieving All Users!", 422))
    }
}








// --------  User Avatar Change
// POST : api/users/change_avatar
// PROTECTED

const changeAvatar = async (req, res, next) => {
    try {
        // check for image availability 
        if (!req.files.avatar) {
            return next(new HttpError("Choose An Image!", 422))
        }
        
        // find user from db
        const user = await User.findById(req.user.id)
        // delete old avatar if any
        if (user.avatar) {
            fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar), (err) => {
                if (err) {
                    return next(new HttpError("Error Uploading Profile Picture!", 422))
                }
            })
        }

        // if user has no avatar or user inserts new image
        //extract avatar from request files
        const {avatar} = req.files;

        // check file size 
        if (avatar.size > 50000) {
            return next(new HttpError("Profile Picture Should Be Less Than 5MB!", 422))
        }

        // rename image
        let fileName;
        fileName = avatar.name;
        let splittedFileName = fileName.spilt('.')
        let newFilename = splittedFileName[0] + uuid() + '.' + splittedFileName[splittedFileName.length -1]

        // upload image
        avatar.mv(path.join(__dirname, '..', 'uploads', newFilename), async (err) => {
            if (err) {
                return next(new HttpError(err))
            }

            // if image upload succeeds
            const updatedAvatar = await User.findByIdAndUpdate(req.user.id, {avatar: newFilename}, {new: true})
            // if upload fails 
            if (!updatedAvatar) {
                return next(new HttpError("Profile Picture Upload Failed!", 422))
            }
            res.status(200).json(updatedAvatar)
        })


    } catch (error) {
        return next(new HttpError("Error Retrieving Profile Picture!", 422))
    }
}








// --------  Edit User 
// POST : api/users/edit_user
// PROTECTED

const editUser = async (req, res, next) => {
    res.json("Edit User")
}









module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}


