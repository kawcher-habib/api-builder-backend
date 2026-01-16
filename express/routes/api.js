const express = require('express');
const router = express.Router();

// Root Page
router.get('/', (req, res)=>{
    res.send("Hello I am working")
})



module.exports = router;

