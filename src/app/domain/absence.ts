export class Absence {
    public id: number;
    constructor(public beginDate:Date, public endDate:Date, public type:string, public motif:string){
    }

}
