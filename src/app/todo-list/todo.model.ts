export class Todo {
    
    constructor(public id: number, public label: string){
    }
}

export type Todos = Array<Todo>;