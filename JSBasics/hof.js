function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name())
    }
    return greet
}

function getName(){
    return document.getElementById('namebox').value
}

let g1=createGreeter('jar')
let g2=createGreeter('nak')
console.log(typeof g1)
console.log(greet('M'))