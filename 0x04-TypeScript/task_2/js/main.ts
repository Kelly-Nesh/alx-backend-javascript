interface BaseInterface {
    workFromHome(): string
    getCoffeeBreak(): string
}
interface DirectorInterface extends BaseInterface {
    workDirectorTasks(): string
}
interface TeacherInterface extends BaseInterface {
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }
    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary == 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director()
}

function isDirector(employee: any): boolean {
    return employee instanceof Director
}

function executeWork(employee: any): void {
    if (isDirector(employee)) {
        employee.workDirectorTasks()
    } else {
        employee.workTeacherTasks()
    }
}

type Subjects<String> = 'Math' | 'History'

function teachClass(todayClass: Subjects<string>): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } else if (todayClass === 'History') {
        return 'Teaching History'
    }
}