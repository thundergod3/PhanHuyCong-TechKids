const express = require('express');
const Router = express.Router;
const commentApiRouter = Router();

const CommentsModel = require("../models/users");

commentApiRouter.post('/', function (req, res) {
    const { comment } = req.body
    CommentsModel.create(
        { comment },
        function (err, commentCreate) {
            if (err) res.send({ success: 0, err })
            else res.send({ success: 1, data: commentCreate });
        })
});

commentApiRouter.get("/", function (req, res) {
    CommentsModel.find({}, function (err, comments) {
        if (err) console.log(err);
        else res.send({success: 1, data: comments});
    });
});

commentApiRouter.get('/:id', function (req, res) {
    const CommentId = req.params.id;
    CommentsModel.findOne({ _id: CommentId }, function (err, foundData) {
        if (err) console.log(err);
        else res.send({success: 1, data: foundData})
    })
});

commentApiRouter.put("/:id", function(req, res) {
   CommentsModel.findOneAndUpdate(
       {_id: req.body.params.id},
       {
           $set: {comment: req.body.comment}
       }, function(err, changeData) {
           if(err) console.log(err);
           else res.send({success: 1, data: changeData})
       }
   )
});
commentApiRouter.delete("/:id", function(req, res) {
    CommentsModel.findOneAndDelete(req.body.params.id, function(err) {
        if(err) console.log(err);
        else res.send({success: 1})
    })
});

module.exports = commentApiRoutercls
