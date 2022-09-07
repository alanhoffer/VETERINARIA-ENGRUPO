function randomId() {
    return Math.random() * (99999 - 1) + 1;
}


export function generarId(arreglo: any[]){

    while(true){
        let idgenerado = randomId();
        
        if(arreglo.find(psj => psj.getId() != idgenerado)){
            return idgenerado;
        }
    }   

}


