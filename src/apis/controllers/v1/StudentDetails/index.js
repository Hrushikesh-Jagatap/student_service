const StudentService = require('@services/v1/StudentDetails');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get all students
const getAllStudent = async (req, res, next) => {
  try {

    const students = await StudentService.getAllStudent();

    if (!students) {
      return HttpResponseHandler.success(req, res, students);
    }
    
    return HttpResponseHandler.success(req, res, students);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudent
}  