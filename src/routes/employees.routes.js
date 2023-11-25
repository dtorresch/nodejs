import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  getAccount,
  getAccounts,
  getincome,
  getincomes,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Account
router.get("/account", getAccounts);

// GET An Account
router.get("/account/:id", getAccount);

// GET all Income
router.get("/account", getIncomes);

// GET An Income
router.get("/account/:id", getIncome);

// GET all Employees
router.get("/employees", getEmployees);

// GET An Employee
router.get("/employees/:id", getEmployee);

// DELETE An Employee
router.delete("/employees/:id", deleteEmployee);

// INSERT An Employee
router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployee);

export default router;
