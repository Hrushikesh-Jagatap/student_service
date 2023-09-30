const express = require('express');

const router = express.Router();

const DeleteStudentByIdController = require('@root/src/apis/controllers/v1/DeleteStudentById')

router.delete('/:id', async (req, res) => {
    const result = await DeleteStudentByIdController.deleteStudentById(req.params.id)
    if (!result) {
        res.status(404).json({ message: 'Student not found' });
    } else {
        res.json({ message: 'Student deleted successfully' });
    }
});

module.exports = router;
