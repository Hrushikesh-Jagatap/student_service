
const StudentService = require('@root/src/apis/services/v1/CreateStudent');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to create a new student
const createStudent = async (req, res, next) => {
    try {
        const newStudent = await StudentService.createStudent(req.body);

        if (!newStudent) {
            return HttpResponseHandler.success(req, res, newStudent);
        }
        return HttpResponseHandler.success(req, res, newStudent);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createStudent
};
