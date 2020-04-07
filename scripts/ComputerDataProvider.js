let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => fetch("http://localhost:4000/computers")
    .then(reponse => reponse.json())
    .then(data => computers = data)