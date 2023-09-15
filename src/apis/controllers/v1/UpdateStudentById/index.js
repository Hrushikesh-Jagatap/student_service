const StudentService = require('@root/src/apis/services/v1/UpdateStudentById');

// Controller function to update a student by ID
const updateStudentById = async (req, res) => {
  try {
    const updatedStudent = await StudentService.updateStudentById(req.params.id, req.body);
    const result = {
      data: null,
      success: false,
      error: 'Error in updating  student By StudentId',
    }
    if (!updatedStudent) {
      res.result;
    }
    result.data = updatedStudent;
    result.success = true;
    return result;

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updateStudentById,
};
