const StudentService = require('@services/v1/StudentDetails');

// Controller function to get all teachers
const getAllStudent = async (req, res) => {
  try {
    const students = await StudentService.getAllStudent();
    const result = {
      data: null,
      success: false,
      error: 'Error in Finding  All student',
    }
    if (!students) {
      res.result
    }
    result.data = students;
    result.success = true;
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStudent
}  