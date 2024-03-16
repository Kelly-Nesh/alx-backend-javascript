interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'London'
}

const studentsList: Student[] = [ student1, student2 ]

const table = document.createElement('table')
document.body.appendChild(table)
function row(s: Student){
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (const key in s) {
        const td = document.createElement('td')
        td.textContent = s[key]
        tr.appendChild(td)
    }
}
studentsList.forEach(row)
