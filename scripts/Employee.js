const Employee = (employee, computer) => {
    return `
        <section class="employee">
            <header>
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div>
                <ul>
                    <li>${computer.year} ${computer.model}</li>
                </ul>
            </div>
        </section>
    `
}

export default Employee