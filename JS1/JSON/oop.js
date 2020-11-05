// javascript object notation

// allows to create objects without defining the class

var Ujj={
    x:100,
    y:20,
    color:"Fair",
    quality:["bewkoof","Kid","Poision","Cute","LOL"],

    do:function(){
        console.log("Spitting Poision",this.x,this.y);
    }
    
};

for(let i=0;i<Ujj.quality.length;i++){
    console.log(Ujj.quality[i]);
}

Ujj.quality.forEach(function(val,idx){
    console.log(idx,val);
});