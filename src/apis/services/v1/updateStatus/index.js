const StudentData = require('@models/Student');
const { loadBalancer, SYSTEM_TOKEN,teacher } = require('@config');
const axios = require('axios');

const updateStudentStatus = async (studentId, studentData) => {
  try {
    const student = await StudentData.findOne({ student_id: studentId });

    if (!student) {
      throw new Error('Student not found');
    }

    let { tid, status, about, subject, flag, classes } = studentData;
    let existingStatus = student.req_status.find(
      (reqStatus) => reqStatus.tid == tid && reqStatus.subject == subject && reqStatus.classes == classes
    );

    if (existingStatus) {
      existingStatus.status = status;
    } else {
      student.req_status.push({ tid, status, about, subject, flag, classes });
    }

    const updatedStudent = await student.save();

    if (status == "Accepted") {
      // Push the new teacher data into the teacher_id array
      const newTeacherData = { teacher_id: tid, subject, classes };
      updatedStudent.teacher_id.push(newTeacherData);

      // Update flag for specific conditions
      updatedStudent.req_status.forEach((reqStatus) => {
        if (reqStatus.status == "requested" && reqStatus.subject == subject && reqStatus.classes == classes) {
          reqStatus.flag = false;
        }
      });

      await updatedStudent.save();
    }

    if (status == "requested") {
      const config = {
        method: 'put',
        url: `${teacher}/tms/apis/v1/status/${tid}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          sid: studentId,
          status,
          about,
          subject,
          classes,
          flag,
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
