const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "get Faculty request"
    })
})
router.post('/', (req, res) => {
    res.status(200).json({
        message: "post Faculty"
    })
})

module.exports = router