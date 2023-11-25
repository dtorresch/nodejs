import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/usuarios", getEmployees);

// GET An Employee
router.get("/usuarios/:id", getEmployee);

// DELETE An Employee
router.delete("/usuarios/:id", deleteEmployee);

// INSERT An Employee
router.post("/usuarios", createEmployee);

router.patch("/usuarios/:id", updateEmployee);

export default router;
