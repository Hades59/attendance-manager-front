export class Absence {

  public id: number
  public status: string
  constructor(public beginDate:Date, public endDate:Date, public motif:string, public type:string){
  }

  
}
