const StudentService = require('@root/src/apis/services/v1/DeleteStudentById');

// Controller function to delete a student by ID
const deleteStudentById = async (req, res) => {
    try {
        const deletedStudent = await StudentService.deleteStudentById(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ error: 'student not found' });
        }
        res.json({ message: 'student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteStudentById
}