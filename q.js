
let time  = new Date().getMilliseconds();
console.log(time)


function runCode(x){
   for(let i =0; i<x; i++){
        for(let j=0; j<10; j++){
                 for(let k=0; k<x; k++){
                      for(let m=0;m<10; m++){
                          console.log("shaba");
                              let time2 = new  Date().getMilliseconds();
                              console.log(time2)
                      }
                 }
        }
   }
}



runCode(4);