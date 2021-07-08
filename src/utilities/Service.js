import EmployeeData from './Employee.json'

export default class Service {

    constructor() {
        this.Employees = EmployeeData
    }

    getEmployees() {
        return this.Employees
    }
    addEmployee({ name, age }) {
        const id = parseInt(this.Employees[this.Employees.length - 1].id) + 1

        this.Employees.push({ id: id, name: name, age: age })
        console.log(this.Employees)
        return this.Employees
    }
    deleteEmployee(id) {
        const index = this.Employees.findIndex(x => x.id === id);
        this.Employees.splice(index, 1)
        return this.Employees
    }
    updateEmployee({ id, name, age }) {
        const index = this.Employees.findIndex(x => x.id === id);
        const empObj = this.Employees[index]
        if (name)
            empObj.name = name
        if (age)
            empObj.age = age
        this.Employees[index] = empObj
        return this.Employees
    }

}