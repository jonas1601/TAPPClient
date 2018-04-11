class Termin{

    titel: string;
    beschreibung: string;
    anfang: Date;
    ende: Date;
    ganztaegig: number;
    gruppenId: number;

    constructor(titel: string, beschreibung: string, anfang: Date, ende: Date, ganztaegig: number, gruppenId: number) {
        this.titel = titel;
        this.beschreibung = beschreibung;
        this.anfang = anfang;
        this.ende = ende;
        this.ganztaegig = ganztaegig;
        this.gruppenId = gruppenId;
    }

    public getTitel():string{
        return this.titel;
    }

    public setTitel(titel: string){
        this.titel = titel;
    }

    public getBeschreibung():string{
        return this.beschreibung;
    }

    public setBeschreibung(beschreibung: string){
        this.beschreibung = beschreibung;
    }

    public getAnfang():Date{
        return this.anfang;
    }

    public setAnfang(anfang: Date){
        this.anfang = anfang;
    }

    public getEnde():Date{
        return this.ende;
    }

    public setEnde(ende: Date){
        this.ende = ende;
    }

    public getGanztaegig():number{
        return this.ganztaegig;
    }
    
    public setGanztaegig(ganztaegig: number){
        this.ganztaegig = ganztaegig;
    }

    public getGruppenId():number{
        return this.gruppenId;
    }
    public setGruppenId(gruppenId: number){
        this.gruppenId = gruppenId;
    }
}

