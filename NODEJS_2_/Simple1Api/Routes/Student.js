const express = require('express')
const router = express.Router()
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: 'get is running'
    })

    router.post('/', (req, res, next) => {
        res.status(200).json({
            message: 'post is running'
        })
    })
})
module.exports = router