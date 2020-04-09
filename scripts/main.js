import { getEmployees } from "./EmployeeDataProvider.js";
import { getComputers } from "./ComputerDataProvider.js";
import { employeeList } from "./EmployeeList.js";
import { getDepartments } from "./DepartmentDataProvider.js";
import { getLocations } from "./LocationDataProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(employeeList)