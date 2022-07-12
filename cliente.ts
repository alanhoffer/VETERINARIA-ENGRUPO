import {Persona} from './persona'

export class Cliente extends Persona{

    private visitas:number = 0;
    private vip:boolean = false;

    constructor(idI:number, nombreI:string,telefonoI:number){
        super(idI, nombreI,telefonoI);
    }

    public newVisita(){
        this.visitas++
        if (this.visitas >= 5 && this.vip === false ){
            this.vip = true
        } 
    }

    public contarVisita(){
        return this.visitas;
    }

    public esVip(){
        return this.vip;
    }

    
}