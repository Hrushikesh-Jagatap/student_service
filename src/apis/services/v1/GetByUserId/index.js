const StudentData = require('@root/src/apis/models/Student');

// Service function to get a single user by ID
const getUserById = async (userId) => {
    try {
      const student = await StudentData.findOne({userId:userId});
      return student;
    } catch (error) {
      throw new Error('Failed to get student By UserId');
    }
  };

module.exports = {
  getUserById
}  