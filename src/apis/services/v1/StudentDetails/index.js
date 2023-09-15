const StudentData = require('@root/src/apis/models/Student');

// Service function to get all teachers
const getAllStudent = async () => {
  try {
    const student = await StudentData.find();
    return student;
  } catch (error) {
    throw new Error('Failed to get students');
  }
};


module.exports = {
  getAllStudent
}  