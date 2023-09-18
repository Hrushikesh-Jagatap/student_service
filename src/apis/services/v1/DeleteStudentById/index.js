const StudentData = require('@root/src/apis/models/Student');

// Service function to delete a student by ID
const deleteStudentById = async (studentId) => {
  try {
    const deletedStudent = await StudentData.findByIdAndDelete({ _id: studentId }, { isDeleted: true });
    return {};
  } catch (error) {
    throw new Error('Failed to delete student');
  }
};

module.exports = {
  deleteStudentById
}