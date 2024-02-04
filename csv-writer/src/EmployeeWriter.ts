import { CSVWriter } from "./index";

interface Employee {
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    {id: 1, name: 'mario', role: 'web dev', salary: 500},
    {id: 2, name: 'luigi', role: 'web dev', salary: 500},
    {id: 3, name: 'yoshi', role: 'web dev', salary: 500}
])

employeeWriter.save('./data/employees.csv')