const StudentData = require('@models/Student');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateStudentStatus = async (studentId, studentData) => {
  try {
    const student = await StudentData.findOne({ student_id: studentId });

    if (!student) {
      throw new Error('Student not found');
    }

const { tid, status, about } = studentData;
    let existingStatus = student.req_status.find((reqStatus) => reqStatus.tid == tid);






    if (existingStatus) {
      existingStatus.status = status;
      existingStatus.about = about;
    } else {
      student.req_status.push({ tid, status, about });
    }

    const updatedStudent = await student.save();

    if (status == "requested") {
      const config = {
        method: 'put',
        url: `${loadBalancer}/tms/apis/v1/status/${tid}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          sid: studentId,
          status: status,
          about: about,
        },
      };

      const studentUpdateResult = await axios(config);
      console.log('Student status updated:', studentUpdateResult.data);
    }

    return updatedStudent;
  } catch (error) {
    console.error('Error updating student status:', error.message);
    throw new Error('Failed to update student status');
  }
};

module.exports = {
  updateStudentStatus,
};
