interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [index: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    console.log(`${firstName[0]}. ${lastName}`)
}