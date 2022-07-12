import {Persona} from './persona'

export class Proveedor extends Persona {

    protected cuit:number;

    constructor (idI:number, nombreI:string,telefonoI:number,cuitI:number){
        super(idI,nombreI,telefonoI);
        this.cuit = cuitI;
    }

    public getCuit(){
        return this.cuit;
    }

    public cambiarCuit(nuevoCuit:number){
        this.cuit = nuevoCuit;
    }

}