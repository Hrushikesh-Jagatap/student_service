const express = require('express');

const router = express.Router();

const UpdateStudentByIdController = require('@root/src/apis/controllers/v1/UpdateStudentById')

router.put('/userId/:id', async(req, res, next) => {
    try {
        const result = await UpdateStudentByIdController.updateStudentById(req, res, next);
    } catch (error) {
        next(error);
    } 

});

module.exports = router;
