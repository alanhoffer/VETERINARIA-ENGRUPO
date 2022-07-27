function generarId() {
    return Math.random() * (99999 - 1) + 1;
}



let arreglo = [{id: 1}, {id: 2}]

export function verificarId(arreglo){

    while(true){
        let idgenerado = generarId();
        
        if(arreglo.find(psj => psj.id != idgenerado)){
            return idgenerado;
        }
    }   

}


