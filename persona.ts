 export abstract class Persona {

    private id:number;
    private nombre:string;
    private telefono:number;

    constructor(id:number, nombre:string, telefono:number) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public getId():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getTelefono():number{
        return this.telefono;
    }

    public setId(nuevoId:number){
        this.id = nuevoId;
    }

    public cambiarNombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

    public cambiarTelefono(nuevoTelefono:number){
        this.telefono = nuevoTelefono;
    }

    public saludar():string{
        return "Estoy saludando";
    }

    abstract construirMensaje():string ;
    
}