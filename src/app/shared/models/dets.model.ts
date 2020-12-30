export class Detector {
    id:number;
    name:string;
    status:boolean;
    constructor (id:number, name:string, status=Boolean(Math.round(Math.random()))){
        this.name = name;
        this.id = id;
        this.status = status;
    }
}
