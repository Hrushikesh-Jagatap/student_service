const StudentData = require('@root/src/apis/models/Student');

// Service function to delete a student by ID
const deleteStudentById = async (teacherId) => {
  try {
    const deletedStudent = await StudentData.findByIdAndDelete(teacherId);
    return deletedStudent;
  } catch (error) {
    throw new Error('Failed to delete student');
  }
};

module.exports = {
  deleteStudentById
}