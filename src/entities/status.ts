export class Status{
  terminId: string;
  personId: string;
  statusId: string;
  kommentar: string;

  constructor(terminId: string, personId: string, statusId: string, kommentar: string){
    this.terminId = terminId;
    this.personId = personId;
    this.statusId = statusId;
    this.kommentar = kommentar;
  }
}
