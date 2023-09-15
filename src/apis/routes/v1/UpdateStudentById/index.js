const express = require('express');

const router = express.Router();

const UpdateStudentByIdController = require('@root/src/apis/controllers/v1/UpdateStudentById')

router.put('/students/:id', async(req, res) => {
    try {
        const result = await UpdateStudentByIdController.updateStudentById(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } 

});

module.exports = router;
