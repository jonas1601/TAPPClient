class Gruppe{
    /* private int gruppenId;
    private String name;
    */

    gruppenId: number;
    name: string;

   constructor(gruppenId: number, name: string) {
    this.gruppenId = gruppenId;
    this.name = name;
   }

    
   public getGruppenId() : number {
       return this.gruppenId
   }
   
   public setGruppenId(gruppenId: number) {
       this.gruppenId = gruppenId;
   }

   public getName():string{
       return this.name;
   }

   public setName(name : string){
       this.name = name;
   }
   
   
}