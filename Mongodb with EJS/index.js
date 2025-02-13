const express = require('express');
const path = require('path');
const app = express();

const userModel = require('./model/user')

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render('read', {users});
});

app.post('/create', async (req, res) => {
    let {name, email, image} = req.body;

    let createuser = await userModel.create({
        name,
        email,
        image
    });

    res.redirect("/read");
});

app.get('/delete/:id', async (req, res) => {
    await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user});
});

app.post('/update/:userid', async (req, res) => {
    let {name, email, image} = req.body;
    await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, image}, {new:true});
    res.redirect("/read");
});

app.listen(3000);