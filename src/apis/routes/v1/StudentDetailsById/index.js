const express = require('express');

const router = express.Router();

const StudentDetailsByIdController = require('@root/src/apis/controllers/v1/StudentDetailsById')

router.get('/students/:id', async (req, res) => {
    try {
        const result = await StudentDetailsByIdController.getStudentById(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
