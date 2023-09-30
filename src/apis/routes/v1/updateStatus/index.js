const express = require('express');
const router = express.Router();
const UpdatestatusController = require('@controllers/v1/updatestatus');

router.put('/status/:id', async (req, res) => {
    try {
        const result = await updateStatusController(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
