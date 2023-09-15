const express = require('express');

const router = express.Router();

const updateStatusController = require('@root/src/apis/controllers/v1/updateStatus')

router.put('/status/teacher_id/student_id', async(req, res) => {
    try {
        const result = await updateStatusController(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } 

});

module.exports = router;
