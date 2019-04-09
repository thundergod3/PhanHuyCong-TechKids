const express = require("express");
const Router = express.Router;

const apiRouter = Router();

const imagesApiRouter = require('./imagesApiRouter');
const userApiRouter = require('./usersApiRouter');
const commentApiRouter = require('./commentApiRouter')

// http://localhost:6969/api => Hello

apiRouter.get("/", function(req, res) {
    res.send('Hello')
});

apiRouter.use('/images', imagesApiRouter);
apiRouter.use('/users', userApiRouter);
apiRouter.use('/comment', commentApiRouter)

module.exports = apiRouter;