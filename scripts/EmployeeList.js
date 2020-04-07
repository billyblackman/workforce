import { useEmployees } from "./EmployeeDataProvider.js"
import { useComputers } from "./ComputerDataProvider.js"
import Employee from "./Employee.js"

const contentTarget = document.querySelector(".employees")

export const employeeList = () => {

    const allEmployees = useEmployees()
    const allComputers = useComputers()

    const render = () => {
        contentTarget.innerHTML = allEmployees.map(employee => {
            
            const assignedComputer = allComputers.find(
                computer => computer.id === employee.id
            )
            return Employee(employee, assignedComputer)
        })
    }
    render()
}