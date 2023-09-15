const StudentData = require('@root/src/apis/models/Student');

// Service function to update a student by ID
const updateStudentById = async (studentId, studentData) => {
  try {
    const updatedstudent = await StudentData.findByIdAndUpdate(studentId, studentData, { new: true });
    return updatedstudent;
  } catch (error) {
    throw new Error('Failed to update teacher');
  }
};


module.exports = {
  updateStudentById,
};
