const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});


router.get('/home', (req, res) => {
    res.render('profile');
});


router.get('/search', (req, res) => {
    res.send('search');
});

router.get('/edit', (req, res) => {
    res.send('edit');
});

router.get('/like', (req, res) => {
    res.send('like');
});



router.get('/edit', (req, res) => {
    res.render('edit');
});


router.get('/next', (req, res) => {
    res.send('next');
});

router.get('/posts', (req, res) => {
    res.send('posts');
});


router.get('/logout', (req, res) => {
    res.render("index")
});

module.exports = router;