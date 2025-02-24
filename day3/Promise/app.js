let p1=new Promise(function(reslove , reject){
    console.log("wait for promise");
    setTimeout(function(){
     let data = "promise will be resloved ,data mil gaya";
     let err = 'promise is rejected';
     reslove(data);
     reject(err);
    },2000)
})


p1.then(function(data){
console.log(data);

}).catch(function(err){
    console.log(err);
})