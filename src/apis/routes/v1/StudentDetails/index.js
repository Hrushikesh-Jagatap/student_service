const express = require('express');

const router = express.Router();

const StudentDetailsControllers = require('@root/src/apis/controllers/v1/StudentDetails')

router.get('/students',async(req, res) => {
    try {
        const result = await StudentDetailsControllers.getAllStudent(req, res);
        res.status(201).json({result});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
