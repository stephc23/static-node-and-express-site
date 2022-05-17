const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', (req, res) => {
    res.render('index', {projects: data.projects});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    const {id} = req.params; 
    const {projects} = data;

    if (id < projects.length) {
        res.render('project', {project: projects[id]});
    } else {
        next();
    }
});

module.exports = router;