const Employee = (employee, computer, department, location) => {
    return `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <section class="employee__computer">
                ${computer.year} ${computer.model}
            </section>
            <section class="employee__department">
                ${department.name}
            </section>
            <section class="employee__location">
                ${location.city}
            </section>
        </div>
    `
}

export default Employee