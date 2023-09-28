const express = require('express');

const router = express.Router();

const CreateStudentController = require('@root/src/apis/controllers/v1/CreateStudent');

router.post('/student-create', async (req, res, next) => {
    try {
        const result = await CreateStudentController.createStudent(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
