const express = require('express');

const router = express.Router();

const StudentDetailsByIdController = require('@root/src/apis/controllers/v1/StudentDetailsById')

router.get('/students/:id', async (req, res, next) => {
    try {
        const result = await StudentDetailsByIdController.getStudentById(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
