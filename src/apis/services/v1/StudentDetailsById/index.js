const StudentData = require('@root/src/apis/models/Student');

// Service function to get a single student by ID
const getStudentById = async (_id) => {
    try {
      const student = await StudentData.findById(_id);
      return student;
    } catch (error) {
      throw new Error('Failed to get student');
    }
  };

module.exports = {
  getStudentById
}  