import { getEmployees } from "./EmployeeDataProvider.js";
import { getComputers } from "./ComputerDataProvider.js";
import { employeeList } from "./EmployeeList.js";
import { getDepartments } from "./DepartmentDataProvider.js";

getEmployees()
    .then(getDepartments)
    .then(getComputers)
    .then(employeeList)