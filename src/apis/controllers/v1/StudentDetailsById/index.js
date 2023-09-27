const StudentService = require('@root/src/apis/services/v1/StudentDetailsById');
const { HttpResponseHandler } = require('intelli-utility');


// Controller function to get a single student by ID
const getStudentById = async (req, res, next) => {

    try {
        const student = await StudentService.getStudentById(req.params.id.toString());

        if (!student) {
            return HttpResponseHandler.success(req, res, student);
        }

        return HttpResponseHandler.success(req, res, student);

    } catch (error) {
        next(error);
    }
};


module.exports = {
    getStudentById
}  