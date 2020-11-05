let arr=["Apple","Mango","Guava"];
console.log(arr);

for(let i=0; i<5;i++){
    console.log(arr[i]);
}
arr.push("Banana");
arr.pop();
arr.shift();
arr.unshift("Kiwi");
arr.indexOf("kiwi");

if(arr[0]=="Apple"){
    console.log("it is");

}
else{
    console.log("its not");
}
