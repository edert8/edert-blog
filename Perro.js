class Perro{
    contructor(nombre){
        this.nombre = nombre;
    }

    ladra(){
        console.log("GUAU");
    }

    mover(parte, callback){
        switch(parte)  
        {
            case "COLA":
                var veces=0;

                var int = setInterval(function(){
                    console.log("Moviendo mi cola...");
                    veces+=1;

                    if (veces>5)
                    {
                        clearInterval(int);
                        callback(null,"Me cansé");
                    }
                })
                break;

            default:
                var ERROR = {
                    message : "No tengo " + parte
                };
                callback(ERROR);
        }

       callback(null,"ACABADO");
    }
}

module.exports = Perro;