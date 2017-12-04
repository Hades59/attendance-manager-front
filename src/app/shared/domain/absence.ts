export class Absence {

  public id: number
  constructor(public beginDate:Date, public endDate:Date, public motif:string, public type:string, public status: string){
  }

  
}
