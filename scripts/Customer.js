const Customer = (customer, employees) => {
    return `
        <div class="customer">
            <header class="customer__name">
                <h1>${customer.name}</h1>
            </header>
            <section class="customer__employees">
                <h3>Employees who work for ${customer.name}</h3>
                    <ul>
                        ${employees.map(
                            employee => `<li>${employee.firstName} ${employee.lastName}</li>`
                            )
                            .join("")
                        }
                    </ul>
            </section>
        </div>
    `
}

export default Customer