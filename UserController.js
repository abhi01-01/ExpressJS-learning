const registerUser = (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPwd = req.body.password;

    // way to send JSON obj in api
    res.json({
        sucess: true,
        // name: userName,
        // email: userEmail,
        // password: userPwd,
    });
};

const userConfirmation = (req, res) => {

    // res.send("wow registered");

    res.json({
        sucess: true,
        message: "wow registered",
    });
};

module.exports = { registerUser, userConfirmation }; // registerUser defined as variable