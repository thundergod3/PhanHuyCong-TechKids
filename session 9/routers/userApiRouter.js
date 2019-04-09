const express = require('express');
const Router = express.Router;
const usersApiRouter = Router();

const UsersModel = require("../models/users");

usersApiRouter.post('/', function (req, res) {
    const { name, account, password, location, gender } = req.body
    UsersModel.create(
        { name, account, password, location, gender },
        function (err, userCreate) {
            if (err) res.send({ success: 0, err })
            else res.send({ success: 1, data: userCreate });
        })
});

usersApiRouter.get("/", function (req, res) {
    UsersModel.find({}, function (err, User) {
        if (err) console.log(err);
        else res.send({success: 1, data: User});
    });
});

usersApiRouter.get('/:id', function (req, res) {
    const UserId = req.params.id;
    UsersModel.findOne({ _id: UserId }, function (err, foundUser) {
        if (err) console.log(err);
        else res.send({success: 1, data: foundUser})
    })
});

usersApiRouter.put('/:id', function(req, res) {
    UsersModel.findOneAndUpdate(
        {_id: req.body.params.id},
        {
            $set: {
                name: req.body.name,
                dob: req.body.dob,
                account: req.body.account,
                password: req.body.password,
                location: req.body.location,
                gender: req.body.gender
            }
        }, function(err, changeData) {
            if(err) console.log(err);
            else res.send({success: 1, data: changeData})
        }
    )
});

usersApiRouter.delete('/:id', function(req, res) {
    UsersModel.findOneAndDelete(req.body.params.id, function(err) {
        if(err) console.log(err);
        else res.send({success: 1})
    })
});

module.exports = usersApiRouter