const Employee = (employee, computer, department, location, customers) => {
    return `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <section class="employee__computer">
                <div>
                    <h4>Assigned Computer: ${computer.year} ${computer.model}</h4>
                </div>
            </section>
            <section class="employee__department">
                <div>
                    <h4>Department: ${department.name}</h4>
                </div>
            </section>
            <section class="employee__location">
                <div>
                    <h4>Branch: ${location.city}</h4>
                </div>
            </section>
            <section class="employee__customers">
                <h3>Customers</h3>
                    <ul>
                        ${customers.map(
                            customer => `<li>${customer.name}</li>`
                        )
                        .join("")
                    }
                    </ul>

                    
            </section>
        </div>
    `
}

export default Employee