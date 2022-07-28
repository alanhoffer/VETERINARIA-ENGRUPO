import {Persona} from './persona'
import {IComunicarse} from './IComunicarse'
import { Cliente } from './cliente';

export class Proveedor extends Persona implements IComunicarse {

    private cuit:number;

    constructor(id:number,nombre:string,telefono:number, cuit:number){
        super(id,nombre,telefono);
        this.cuit = cuit;
    }

    public getCuit(){
        return this.cuit;
    }

    public cambiarCuit(nuevoCuit:number){
        this.cuit = nuevoCuit;
    }

    public comunicarse():string{
        return this.construirMensaje()+"PRUEBA";
    }

    construirMensaje(): string {
        return "Hola, soy el Proveedor "+this.getNombre()+" ";
    }
}
