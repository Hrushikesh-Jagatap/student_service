const express = require('express');

const router = express.Router();

const StudentDetailsControllers = require('@root/src/apis/controllers/v1/StudentDetails')

router.get('/students', async (req, res, next) => {
    try {
        const result = await StudentDetailsControllers.getAllStudent(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
