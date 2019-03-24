const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

const questionModel = require('./models/question.js');

mongoose.connect(
    'mongodb://localhost:27017/web20-quyetde',
    { useNewUrlParser: true },
    function (err) {
        if (err) console.log(err);
        else console.log("Connect to DB success!");
        questionModel.find({}, function (err, docs) {
            if (err) console.log(err);
            else console.log(docs);
        })
    })

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/ask", function (req, res) {
    res.sendFile(__dirname + "/view/ask.html");
});

app.get("/answer", function (req, res) {
    // const answerList = JSON.parse(fs.readFileSync("question.json"));
    // const answer = answerList[Math.floor(Math.random()*answerList.length)];

    res.sendFile(__dirname + "/view/home.html");
});

app.get("/randomquestion", function (req, res) {
    // const questionList = JSON.parse(fs.readFileSync("question.json", "utf-8"));

    questionModel.find({}, function (err, questionList) {
        if (err) console.log(err);
        else res.send(questionList[Math.floor(Math.random() * questionList.length)])
    })

    // res.send(randomQuestion)
});

app.post("/addquestion", function (req, res) {
    // const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
    // const question = {
    //     content: req.body.question,
    //     yes: 0,
    //     no: 0,
    //     id: questionList.length,
    // }; 
    // questionList.push(question);
    // fs.writeFileSync("./question.json", JSON.stringify(questionList));

    const questionContent = req.body.question;
    questionModel.create({
        content: questionContent,
        yes: 0,
        no: 0,
    }, function (err, questionCreated) {
        if (err) console.log(err);
        else console.log(questionCreated);
    })

    res.redirect("/ask");
});

// app.put("/editquestion", function (req, res) {
//     // const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
//     // const question = req.body;
//     // // console.log(question);
//     // questionList[question.id] = question;
//     // // console.log(question);
//     // // console.log(questionList[question.id]);
//     // fs.writeFileSync("./question.json", JSON.stringify(questionList));
// })


// app.get("/vote.html", function(req, res) {
//     res.sendFile(__dirname + "/view/vote.html");
// })

app.get("/vote/:questionId/yes", function (req, res) {
    // const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
    // const questionId = req.params.questionId;
    // questionList[questionId].yes = Number(questionList[questionId].yes) + 1;
    // console.log(questionList[questionId]);
    // fs.writeFileSync("./question.json", JSON.stringify(questionList));
    // res.redirect(`/question/${questionId}`)

    const questionId = req.params.questionId;
    questionModel.findOne({ _id: questionId }, function (err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            data.yes += 1;
            data.save(function (err, docs) {
                if (err) console.log(err);
                else res.redirect(`/question/${questionId}`)
            })
        }
    })
});

app.get("/vote/:questionId/no", function (req, res) {
    // const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
    // const questionId = req.params.questionId;
    // questionList[questionId].no = Number(questionList[questionId].no) + 1;
    // fs.writeFileSync("./question.json", JSON.stringify(questionList));
    // res.redirect(`/question/${questionId}`)

    const questionId = req.params.questionId;
    questionModel.findOne({ _id: questionId }, function (err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            data.no += 1;
            data.save(function (err, docs) {
                if (err) console.log(err);
                else res.redirect(`/question/${questionId}`)
            })
        }
    })
});

app.get("/question/:questionId", function (req, res) {
    res.sendFile(__dirname + "/view/vote.html");
});

app.get("/detail/:questionId", function (req, res) {
    // const questionId = req.params.questionId;
    // const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
    // const question = questionList[questionId];
    // res.send(question);  
    
    const questionId = req.params.questionId;
    questionModel.findOne({_id:questionId}, function(err, data){
        if(err) console.log(err);
        else res.send(data)
    })
});

// app.post("/", function(req,res) {
//     console.log("POST");
// });

// app.put("/", function(req,res) {
//     console.log("PUT");
// });

// app.delete("/", function(req,res) {
//     console.log("DELETE");
// });

app.listen(2002, function (err) {
    if (err) console.log(err)
    else console.log("Sever success !!");
});