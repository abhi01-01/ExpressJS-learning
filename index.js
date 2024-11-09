//creating a server using express
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser")
const router = require("./userRoutes")


const app = express(); // calling express to avail its all methods
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false })) // way to use body-parser

//------------------------- naive method for rendering the component/page
app.use(express.json()); // to send and reveice JSON obj
app.use("/api-2/v1", router); // use router, if this "/api-2/v1" term is using repeteadily in userRoutes for calling api, we can make it constant here, can se used for all api calls as "/api-2/v1 + `url in userRoutes`"

// we'll use path package to reder pages here
app.get('/', (req, res) => {
    //console.log(path.join(__dirname + "/index.html")); , we can get the path of the current directory
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/login", (req, res) => {    // "/api/v1/login" should be same in form(html) and here so when we submit a form, it will redirect to this api and send the data here
    res.send(`<h1>Done : ${req.body.name} with mail:${req.body.email} and pwd:${req.body.password} <h1>`)
    console.log(req.body); // to access the body we need bodyParser, with it we will get undefined from req.body
})

app.post("/api/v1/register", (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPwd = req.body.password;

    // way to send JSON obj in api
    res.json({
        sucess: true,
        name: userName,
        email: userEmail,
        password: userPwd,
    });
});

//----------------------------------------------------------------
// The above approach is good when handling less api's 
// when we create large number of api's we keep seprate controller and router

//  app.post("/api-2/v1/register")


// listen the server
app.listen(port, () => {
    console.log(`Server is working on port: ${port}`);
})