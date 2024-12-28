// Unsupported (4o4) Routes
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error);
}




//Middleware to handle console.error();
const errorHandler = (error, req, res, next) => {
    if(res.headerSent) {
        return next(error)
    }

    res.status(error.code || 500).json({message: error.message || 
        "Unknown error occurred!"
    })
}


module.exports = {notFound, errorHandler}














