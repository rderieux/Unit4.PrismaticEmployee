const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  // Get id from request params
  const { id } = req.params;

  // Try catch get single employee by id
  try {
    const employee = await prisma.employee.findUnique({ where: { id: +id } });
    // Guard case
    if (employee) {
      // Respond with json employee
      res.json(employee);
    } else {
      next({ status: 404, message: `Employee with ${id} does not exist.` });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  // Get id from params, name from body
  const { id } = req.params;
  const { name } = req.body;
  // If there is no name send an error
  if (!name) {
    next({ status: 400, message: "An name must be sent with the request" });
  }

  try {
    if (!book) {
      next({ status: 400, message: `Employee with id: ${id} does not exist.` });
    }

    const updateEmployee = await prisma.employee.update({
      where: { id: +id },
      data: { name },
    });
    res.json(updateEmployee);
  } catch (error) {
    next(error);
  }
});
