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
            
            const assignedComputer = allComputers.find(
                computer => computer.id === employee.id
            )

            const assignedDepartment = allDepartments.find(
                department => department.id === employee.departmentId
            )

            return Employee(employee, assignedComputer, assignedDepartment)
        })
    }
    render()
}