import {Persona} from './persona';
import { IComunicarse } from './IComunicarse';
/*import {Veterinaria} from './veterinaria';*/

export class Cliente extends Persona implements IComunicarse{

    private visitas:number;
    private vip:boolean;

    constructor(id:number, nombre:string,telefono:number){
        super(id,nombre,telefono);
        this.visitas = 0;
        this.vip = false;
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

    comunicarse():string {
        return this.construirMensaje()+" para veterinaria ";
    } 

    construirMensaje(): string {
        return "Mensaje de Cliente "+this.getNombre();
    }

}

