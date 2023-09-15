const express = require('express');

const router = express.Router();

const CreateStudentController = require('@root/src/apis/controllers/v1/CreateStudent');

router.post('/student-create', async (req, res) => {
    try {
        const result = await CreateStudentController.createStudent(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
