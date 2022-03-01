const express = require('express');

//Router instance
const router = express.Router();


//User Routes//
//Route that will GET all properties and values from current user with 200 status code
router.get('/users', (req, res) => {
    res.json(user)
});
//Route that will POST or create new user, set location, and return 201 status code with no content



//Courses Routes//
//Route that will GET all courses with associated user and 200 status code

//Route that will GET corresponding course with associated user and 200 status code

//Route that will POST or create new course, loaction header in URL, and 201 status code

//Route that will PUT or update course and return 204 status code

//Route that will DELETE course and return 204 status code