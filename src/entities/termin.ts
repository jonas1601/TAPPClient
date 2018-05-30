export class Termin{
  titel:string;
  beschreibung:string;
  anfang: Date;
  ende: Date;
  terminId: string;
  ganztaegig: string;
  gruppenId: string;


  constructor(titel: string, beschreibung: string, anfang: Date, ende: Date, terminId: string, ganztaegig: string, gruppenId: string) {
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.anfang = anfang;
    this.ende = ende;
    this.terminId = terminId;
    this.ganztaegig = ganztaegig;
    this.gruppenId = gruppenId;
  }
}
