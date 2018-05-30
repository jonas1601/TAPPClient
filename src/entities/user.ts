export class User {
  benutzername: string;
  vorname: string;
  nachname: string;
  personId: string;

  constructor(benutzername: string, id: string,vorname: string,nachname:string) {
    this.benutzername = benutzername;
    this.personId = id;
    this.vorname = vorname;
    this.nachname = nachname;
  }
}
