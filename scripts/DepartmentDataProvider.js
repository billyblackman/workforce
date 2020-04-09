let departments = []

export const useDepartments = () => departments.slice()

export const getDepartments = () => fetch("http://localhost:4000/departments")
        .then(response => response.json())
        .then(response => departments = response)
