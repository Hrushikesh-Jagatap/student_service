const StudentData = require('@models/Student');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateStudentStatus = async (studentId, studentData) => {
  try {
    const student = await StudentData.findOne({ student_id: studentId });

    if (!student) {
      throw new Error('Student not found');
    }

let { tid, status, about, subject, flag,classes } = studentData;
    let existingStatus = student.req_status.find((reqStatus) => reqStatus.tid == tid);






    if (existingStatus) {
      existingStatus.status = status;
      // existingStatus.about = about;
    } else {
      student.req_status.push({ tid, status, about,subject, flag, classes });
    }






  








    const updatedStudent = await student.save();
    if(status == "Accepted") {
    console.log(updatedStudent.req_status.length)
    let size=updatedStudent.req_status.length;
    for(let i=0; i<size; i++) {
     if(updatedStudent.req_status[i].status=="requested" && updatedStudent.req_status[i].subject==subject &&  updatedStudent.req_status[i].classes==classes){
      // if(flag==true){
        updatedStudent.req_status[i].flag=false;
        //  flag="false";

      // }    
    
      const abc=await updatedStudent.save();
       console.log(abc)
 

     }
    }
  }
    //if(updatedStudent.req_status[].status="requested" && updatedStudent.)

  // if(status == "Accepted") {
    
  //   //  let existingStatus = student.req_status.find((reqStatus) => reqStatus.tid == tid,);
  //   const students = await StudentData.find({ student_id: studentId });
  //  // ,{"reqStatus.subject" :subject},{"reqStatus.classes":classes}
  // //  if()
  // //   console.log(students.length);
  // //   console.log(students)
  // if(students)
  
  // {
  //   flag=false;
  //    student.req_status.push({ tid, status, about,subject, flag, classes });
  //     const updatedStudent1 = await student.save();

  // }
  // }

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
          subject:subject,
          classes:classes,
          flag:flag,
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
