const express = require('express');
const router = express.Router();

const userControler = require("../controller/userController");
// Root Page
router.get('/', (req, res)=>{
    res.send("Hello I am working")
})

//user routes
router.get('/users', userControler.index);
router.get('/users/:id', userControler.show);
router.post('/users', userControler.store);
router.put('/users/:id', userControler.update);
router.delete('/users/:id', userControler.destory);



module.exports = router;

