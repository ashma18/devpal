const express = require('express');
//When we create routes we can use the router variable and express' methods
const router = express.Router();

//res.json will serve back json. 

// @route GET api/posts/test
// @desc Tests post route
//@access Public
router.get('/test', (req, res) => res.json({
    msg: "Posts works"
}));

module.exports = router;