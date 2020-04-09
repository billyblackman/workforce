import { useEmployees } from "./EmployeeDataProvider.js"
import { useComputers } from "./ComputerDataProvider.js"
import Employee from "./Employee.js"
import { useDepartments } from "./DepartmentDataProvider.js"

const contentTarget = document.querySelector(".employees")

export const employeeList = () => {

    const allEmployees = useEmployees()
    const allComputers = useComputers()
    const allDepartments = useDepartments()

    const render = () => {
        contentTarget.innerHTML = allEmployees.map(employee => {
            
            //Find the employee's assigned computer

            const assignedComputer = allComputers.find(
                computer => computer.id === employee.id)

            //Find the employee's assigned department

            const assignedDepartment = allDepartments.find(
                department => department.id === employee.departmentId
            )

            //Render the employee, computer, and department with the found objects as arguments

            return Employee(employee, assignedComputer, assignedDepartment)
        })
    }
    render()
}