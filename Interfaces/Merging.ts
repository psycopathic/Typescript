interface Car{
    brand:string;
    start():void;
}

//declartion merging (interface extension)

interface Car{
    model:string;
    stop():void;
}

const myCar:Car = {
    brand:"BMW",
    model:"M3",
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop");
    }
}

myCar.start();
myCar.stop();