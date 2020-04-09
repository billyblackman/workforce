let locations = []

export const useLocations = () => locations.slice()

export const getLocations = () => fetch("http://localhost:4000/locations")
    .then(response => response.json())
    .then(data => locations = data)
