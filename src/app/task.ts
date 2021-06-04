export class Task {
    constructor(
    public content: string,
    public dateAdded: {day: number, month: number, year: number},
    public checked: boolean,
    public id?: number
    ){}
}


