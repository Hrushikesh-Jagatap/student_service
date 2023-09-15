const StudentService = require('@services/v1/GetByUserId');

// Controller function to get a single student by userID
const getUserById = async (req, res) => {
    try {
        const student = await StudentService.getUserById(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding   student By userId',
        }
        if (!student) {
            res.result;
        }
        result.data = student;
        result.success = true;
        return result;

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    getUserById
}  