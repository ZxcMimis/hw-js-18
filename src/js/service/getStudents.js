export function getStudents () {
    return fetch("http://localhost:3000/students").then((response) => response.json()
)
}