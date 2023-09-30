const StudentService = require('@root/src/apis/services/v1/UpdateStudentById');
const { HttpResponseHandler } = require('intelli-utility');


// Controller function to update a student by ID
const updateStudentById = async (req, res, next) => {
  try {
    const updatedStudent = await StudentService.updateStudentById(req.params.id, req.body);

    if (!updatedStudent) {
      return HttpResponseHandler.success(req, res, updatedStudent);
    }
    return HttpResponseHandler.success(req, res, updatedStudent);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateStudentById,
};
