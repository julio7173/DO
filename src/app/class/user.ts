import { Comment } from "./comment";

export class User {
    id: number;
    name: string;
    date: string;
    type: string;
    comment: Comment

    constructor(id: number, name: string, date: string, type: string, comment: Comment){
        this.id = id;
        this.name = name;
        this.date = date;
        this.type = type;
        this.comment = comment;
    }
}
