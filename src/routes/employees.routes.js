import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  login,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/usuarios", getEmployees);

// GET An Employee
router.get("/usuarios/:id_usu", getEmployee);

// DELETE An Employee
router.delete("/usuarios/:id_usu", deleteEmployee);

// INSERT An Employee
router.post("/usuarios", createEmployee);

router.patch("/usuarios/:id_usu", updateEmployee);

router.post("/login", login);

export default router;
