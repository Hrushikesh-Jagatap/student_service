const StudentService = require('@services/v1/GetByUserId');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single student by userID
const getUserById = async (req, res, next) => {
    try {
        const student = await StudentService.getUserById(req.params.Id);

        if (!student) {
            return HttpResponseHandler.success(req, res, student);
        }
        
        return HttpResponseHandler.success(req, res, student);

    } catch (error) {
        next(error);
    }
};


module.exports = {
    getUserById
}  