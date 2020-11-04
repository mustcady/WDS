console.log(beta())
function alpha (){
    return "A"
}

function beta(){
    return "B"
}

console.log(beta())

let gamma=function (){
    return "C"
}

console.log(gamma())

function area(height,width){
    if(!width){
        return Math.PI*height*height
    }
    return height*width
}

console.log('area 3,4', area(3,4))
console.log('area 4',area(4))

function hello (){
    console.log('hello'+ arguments[0]+ arguments[1])

}
hello(1,2)
hello('Muskan','Gupta')