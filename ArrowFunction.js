

let greet= ()=> console.log("Hello");
greet();

// let name="hey"
// let greeting=(name)=> console.log(name+" ,hey");
// greeting(name);


let object={

    name:["Hello","thanos"],
    speek(){

        this.name.forEach((student)=>{
            console.log(this.name+student)
        });

    }
}

object.speek()