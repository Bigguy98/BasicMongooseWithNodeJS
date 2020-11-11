const employees = require("../models/employee");



module.exports = {
    createEmloyee: function(req, res) {
        const _employee = new employees({
            name: req.body.name,
            age: req.body.age,
            location: req.body.location,
        })
    
        return _employee.save()
            .then((_newEmp) => {
                return res.status(201).json({
                  success: true,
                  message: 'New employee created successfully',
                  Course: _newEmp,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: error.message,
                });
            });
    },

    getEmployees: function(req, res) {
        return employees.find()
            .then(result => {
                return res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: error.message,
                });
            });
    }


}