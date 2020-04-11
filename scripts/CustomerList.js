import { useCustomers } from "./CustomerProvider.js"
import { useEmployees } from "./EmployeeDataProvider.js"
import { useEmployeeCustomerRelationships } from "./EmployeeCustomerProvider.js"
import Customer from "./Customer.js"

const contentTarget = document.querySelector(".customers")

export const customerList = () => {

    const allTheCustomers = useCustomers()
    const allTheEmployees = useEmployees()
    const allTheEmployeeCustomerRelationships = useEmployeeCustomerRelationships()

    const render = () => {
        contentTarget.innerHTML = allTheCustomers.map( customer => {

            //Filter the customer's employee relationships into a new array

            const employeeCustomerRelationships = allTheEmployeeCustomerRelationships.filter(
                relationship => relationship.customerId === customer.id)

            //Map over the filtered array of relationships and return the matching employees for each customer

            const assignedEmployees = employeeCustomerRelationships.map(
                relationship => {
                    return allTheEmployees.find(employee => relationship.employeeId === employee.id)
                })

            //Call Customer() with the customer and the array of their assigned employees as arguments

            return Customer(customer, assignedEmployees)
        })
        .join(`<br>`)
    }
    render()
}