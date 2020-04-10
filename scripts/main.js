import { getEmployees } from "./EmployeeDataProvider.js";
import { getComputers } from "./ComputerDataProvider.js";
import { employeeList } from "./EmployeeList.js";
import { getDepartments } from "./DepartmentDataProvider.js";
import { getLocations } from "./LocationDataProvider.js";
import { getEmployeeCustomerRelationships } from "./EmployeeCustomerProvider.js";
import { getCustomers } from "./CustomerProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomerRelationships)
    .then(employeeList)