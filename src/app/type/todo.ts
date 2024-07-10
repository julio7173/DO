export class Todo {
    id: number;
    task: string;
    isDone: boolean;

    constructor(id: number, task:string, flag:boolean){
        this.id = id;
        this.task = task;
        this.isDone = flag;
    }
}
