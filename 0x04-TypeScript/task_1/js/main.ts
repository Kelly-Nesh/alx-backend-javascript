interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [index: string]: any
}

interface Directors extends Teacher{
    numberOfReports: number
}