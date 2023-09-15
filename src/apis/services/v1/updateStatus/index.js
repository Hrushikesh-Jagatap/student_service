
const StudentData = require('@models/Student');

const updatestatus = async (studentId, Studentdata) => {
  try {
    const result = await StudentData.findOne({ student_id: studentId });

    if (!result) {
      throw new Error('Teacher not found');
    }

    const { tid, status, about } = Studentdata;
    const existingStatus = result.req_status.find((status) => status.tid === tid);

    if (existingStatus) {
      existingStatus.status = status;
      existingStatus.about = about;
    } else {
      result.req_status.push({ tid, status, about });
    }

    const updatedTeacher = await result.save();
    return updatedTeacher;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updatestatus,
};