var fs = require("fs");
var Perro = require("./Perro");
var player = require('play-sound')(opts = {})
/*fs.readFile("README.txt","utf-8",function(error,data){

    if (error)
    {
        return console.error(error);
    }

    console.log(data);
});*/

/*
var perro = new Perro("perro peruano");
perro.ladra();
perro.mover("CABEZA",function(error,data1, data2, data3, data4, data5){
    if (error)
    {
        return console.error(error);
    }
    console.log(data1,data2,data3,data4,data5);
});*/

player.play('foo.mp3', function(err){
  if (err) throw err
});
