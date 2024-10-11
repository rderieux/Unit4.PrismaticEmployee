const express = require("express");
const prisma = require("../prisma");
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
