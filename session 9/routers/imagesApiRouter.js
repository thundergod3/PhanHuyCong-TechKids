const express = require('express');
const Router = express.Router;
const imgaesApiRouter = Router()

const ImageModel = require("../models/images");

//Creat
imgaesApiRouter.post("/", function (req, res) {
    //const link = req.body.link
    const { link, title, author, content } = req.body;
    ImageModel.create(
        { link, title, author, content },
        function (err, ImagesCreate) {
            if (err) res.send({ success: 0, err })
            else res.send({ success: 1, data: ImagesCreate });
        });
})

//Read
imgaesApiRouter.get("/", function (req, res) {
    ImageModel.find({}, function (err, Images) {
        if (err) console.log(err);
        else res.send({success: 1, data: Images});
    });
})

//Read one
imgaesApiRouter.get('/:id', function (req, res) {
    const ImageId = req.params.id;
    ImageModel.findOne({_id: ImageId}, function(err, foundImages) {
        if(err) console.log(err);
        else res.send({success: 1, data: foundImages})
    })
})

//Update
imgaesApiRouter.put("/:id", function (req, res) {
    ImageModel.findOneAndUpdate(
        {_id: req.body.params.id},
        {
            $set: {
                link: req.body.link,
                content: req.body.content,
                title: req.body.title,
                link: req.body.link,
                view: req.body.view,
            }
        }, function(err, changeData) {
            if(err) console.log(err);
            else res.send({success: 1, data: changeData})
        }
    )
})

//Delete
imgaesApiRouter.delete("/:id", function (req, res) {
    ImageModel.findOneAndDelete(req.params.id, function(err) {
        if(err) console.log(err);
        else res.send({success: 1})
    })
})

module.exports = imgaesApiRouter;