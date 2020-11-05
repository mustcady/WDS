let arr=[1,2,3]
console.log(arr[1])

let arr2=[1,'hello',false,[2,3]]
console.log(typeof arr2[0])

for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

for(let index in arr2){
    console.log(arr2[index])
}
for(let val of arr2){
    console.log(val)
}

arr2.push("Hi")
arr2.pop()
arr2.shift()
arr2.unshift("kiwi","mango")

//data changing
let notes=['do','re','so','ko','he','ju','sw']
notes.slice(4,6)

let omit=notes.splice(4,2)
console.log(omit)
console.log(notes)

notes.splice(0,3,'SA','re','ga')
console.log(notes)

// concat
console.log(notes.concat(['sa','re','ga']))

