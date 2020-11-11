const employeeController = require("../controllers/employee_controller")
const express = require("express");
const router = express.Router();



router.route("/create").post(function(req, res) {
    employeeController.createEmloyee(req, res);
});

router.route("/search").get(function(req, res) {
    employeeController.getEmployees(req, res);
});

module.exports = router;