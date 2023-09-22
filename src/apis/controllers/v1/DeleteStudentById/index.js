const StudentService = require('@root/src/apis/services/v1/DeleteStudentById');

// Controller function to delete a student by ID
const deleteStudentById = async (req, res) => {
    try {
        const deletedStudent = await StudentService.deleteStudentById(req.params.id);

        const result = {};

        if (!deletedStudent) {
            return result;
        }
        return result;

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    deleteStudentById
}