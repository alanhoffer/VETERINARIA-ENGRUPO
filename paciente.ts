export class Paciente {
    
    private idCliente:string;
    private nombre:string;
    private especie:string;
    private exotico:boolean;

    constructor(idClienteI:string,nombreI:string,especieI:string){

        this.idCliente = idClienteI;
        this.nombre = nombreI;
        this.especie = especieI;

        if (especieI.toLowerCase() === "perro" || especieI.toLowerCase() === "gato" ){
            this.exotico = false;
        } else {
            this.exotico = true;
        }

    }

    public getId(){
        return this.idCliente;
    }

    public getNombre(){
        return this.nombre;
    }

    public getEspecie(){
        return this.especie;
    }

    public getExotico(){
        return this.exotico;
    }

    public cambiarNombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

}
