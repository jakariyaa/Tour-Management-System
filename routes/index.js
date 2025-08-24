const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Profile page
router.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('profile', { title: 'Profile', user: req.session.user });
});

// Profile edit page
router.get('/profile/edit', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('edit-profile', { title: 'Edit Profile', user: req.session.user });
});

router.post('/profile/edit', authController.updateProfile);

// Login page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Register page
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

module.exports = router;
