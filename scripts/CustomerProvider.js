let customers = []

export const useCustomers = () => customers.slice()

export const getCustomers = () => fetch("http://localhost:4000/customers")
    .then(response => response.json())
    .then(data => customers = data)