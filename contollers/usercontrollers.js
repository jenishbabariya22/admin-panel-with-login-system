const usercrud = require('../models/usermodel');

const index = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('index');
}

const buttons = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('buttons');
}
const cards = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('cards');
}
const color = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('color');
}
const border = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('border');
}
const animation = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('animation');
}
const other = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('other');
}

const login = (req, res) => {
    if (req.cookies.auth) {
        return res.redirect('index');
    }
    return res.render('login');
}

const register = (req, res) => {
    return res.render('register');
}

const charts = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('charts');
}
const tables = (req, res) => {
    if (!req.cookies.auth) {
        return res.redirect('/');
    }
    return res.render('tables');
}

const adduser = async (req, res) => {
    if (req.body.password != req.body.repassword) {
        console.log("password is not match");
        return false;
    }
    try {
        const addData = await usercrud.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        })
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const loginUser = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        let user = await usercrud.findOne({ email: email });

        if (!user || user.password != password) {
            console.log("email and password are incorrect");
            return res.redirect('/');
        }
        res.cookie('auth', user)
        return res.redirect('/index');

    } catch (error) {
        console.log(error);
        return false;
    }
}

const logout = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/');
}

module.exports = ({
    index, buttons, cards, color, border, animation, other, charts, tables, login, register, adduser, loginUser, logout
})