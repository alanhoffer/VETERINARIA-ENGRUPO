import {Proveedor} from './proveedor';
import {Veterinaria} from './veterinaria';


class Red {
    private Veterinarias: Veterinaria[];
    private Proveedores: Proveedor[];

    constructor(){

    }

    public agregarVeterinaria(Veterinaria):void{
        this.Veterinarias.push(Veterinaria);
    }
    
    public modificarVeterinaria(id:number, accion:string, cambio):void{
        let myvet = this.Veterinarias.find(veterinaria => veterinaria.getID() === id);

        switch(accion){
            case "cambiarnombre":
                if(myvet != null){
                    myvet.setNombre(cambio);
                }
            break;
            case "cambiardireccion":
                if(myvet != null){
                    myvet.setDireccion(cambio);
                }
            break;
        }
    }
    
    
    public eliminarVeterinaria(id:number):void{
        this.Veterinarias = this.Veterinarias.filter(veterinaria => veterinaria.getID() != id);

    }

    public agregarroveedor(Proovedor):void{

        this.Veterinarias.push(Proovedor);
    }

    public modificarProveedor(id:number, accion:string, cambio):void{
        switch(accion){
            case "cambiarcuit":
                let myprov = this.Proveedores.find(proveedor => proveedor.getId() === id);
                if(myprov != null){
                    myprov.cambiarCuit(cambio);
                }
            break;
        }
    }


    public eliminarProveedor(cuit:number):void{
        this.Proveedores = this.Proveedores.filter(proveedor => proveedor.getCuit() != cuit);
    }
    
}