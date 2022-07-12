export class Persona {

    protected id:number;
    protected nombre:string;
    protected telefono:number;

    constructor(idI:number, nombreI:string,telefonoI:number){
        
        this.id = idI;
        this.nombre = nombreI;
        this.telefono = telefonoI;

    }

    public getId(){
        return this.id;
    }

    public getNombre (){
        return this.nombre;
    }

    public getTelefono (){
        return this.telefono;
    }

    public cambiarNombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

    public cambiarTelefono(nuevoTelefono:number){
        this.telefono = nuevoTelefono;
    }

}