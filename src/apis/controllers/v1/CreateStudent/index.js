
const StudentService = require('@root/src/apis/services/v1/CreateStudent');

// Controller function to create a new student
const createStudent = async (req, res) => {
    try {
        const newStudent = await StudentService.createStudent(req.body);
        const result = {
            data: null,
            success: false,
            error: 'Error in creating  new   student ',
        }
        if (!newStudent) {
            res.result;
        }
        result.data = newStudent;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createStudent
};
