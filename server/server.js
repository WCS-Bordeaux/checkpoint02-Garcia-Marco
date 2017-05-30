let users = require('../mocks/users.json');
let notes = require('../mocks/notes.json');
let data = { "users": [] }
concatJson();


const express = require('express'),
    bodyParser = require('body-parser'),
    lenNotes = notes.notes.length,
    lenUsers = users.users.length,
    app = express();


app.use(bodyParser.urlencoded({
    extended: true
}))
    .use(bodyParser.json())


app.use(express.static('../public'))

    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })

    .get('/users', function (req, res) {
        res.json(data);
    })

    // .get('/users/:id', function (req, res) {
    //     res.json(getUserById(req.params.id));
    // })

    // .post('/users', function (req, res) {
    //     json.users.push(req.body);
    //     res.end();
    // })

    // .put('/users/:id', function (req, res) {
    //     json.users[getIndex(req.params.id)] = req.body;
    //     res.end();
    // })

    // .delete('/users/:id', function (req, res) {
    //     users.users.splice(getIndex(req.params.id), 1);
    //     res.end();
    // })

    .listen(9000)


function concatJson() {
    const lenUsers = users.users.length,
        lenNotes = notes.notes.length


    for (let i = 0; i < lenUsers; i++) {
        let userId = users.users[i]["_id"];
        data.users.push(users.users[i])
        data.users[i].notes = new Array;
        var numberNote = 1;
        for (let j = 0; j < lenNotes; j++) {
            let noteId = notes.notes[j]["userId"];

            if (noteId == userId) {
                data.users[i].notes.push(notes.notes[j].content);
            }
        }
    }
}

// function getIndex(id) {
//     for (let i = 0; i < lenUsers; i++) {
//         let usersId = users.users[i]["_id"];
//         if (id == usersId) {
//             return i;
//         }
//     }
// }
