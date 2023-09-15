const StudentService = require('@root/src/apis/services/v1/StudentDetailsById');

// Controller function to get a single student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await StudentService.getStudentById(req.params.id.toString());
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  student',
        }
        if (!student) {
            res.result
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
    getStudentById
}  