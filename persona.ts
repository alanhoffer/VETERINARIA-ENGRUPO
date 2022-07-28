 export abstract class Persona {

    constructor(private id:number, private nombre:string, private telefono:number) {
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