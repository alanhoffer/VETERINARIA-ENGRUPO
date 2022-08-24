import Proovedor from './proovedor';
import Veterinaria from './veterinaria';


class Red {
    private Veterinarias: Veterinaria[];
    private Proveedores: Proovedor[];

    constructor(){

    }

    public agregarVeterinaria(Veterinaria):void{
        this.Veterinarias.push(Veterinaria);
    }
    
    public modificarVeterinaria():void{

    }
    
    
    public eliminarVeterinaria(id:number):void{
        this.Veterinarias = this.Veterinarias.filter(veterinaria => veterinaria != id);

    }

    public agregarroveedor(Proovedor):void{

        this.Veterinarias.push(Proovedor);
    }

    public modificarProveedor(id:number, accion:string, cambio):void{
        switch(accion){
            case "cambiarcuit":
                let myprov = this.Proveedores.find(proveedor => proveedor.getId() === id);
                myprov.cambiarCuit(cambio);
            break;
        }
    }


    public eliminarProveedor(id:number):void{
        this.Proveedores = this.Proveedores.filter(proveedor => proveedor != id);
    }
    
}