let employeeCustomerRelationships = []

export const useEmployeeCustomerRelationships = () => employeeCustomerRelationships.slice()

export const getEmployeeCustomerRelationships = () => fetch("http://localhost:4000/employeeCustomerRelationships")
    .then(response => response.json())
    .then(data => employeeCustomerRelationships = data)