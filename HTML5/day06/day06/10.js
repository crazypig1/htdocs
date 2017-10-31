
function isPrime(n){
    //===耗时执行5s===
    //1:获取时间当前毫秒数 1
    var start = new Date().getTime();
    //2:循环
    do{
       //3:再次获取时间毫秒数 3
       var end = new Date().getTime();
    }while(end-start<=5000);
    //4:判断 后面时间减前面时<=5000
}
isPrime(1);
//var p0 = document.getElementById("p0");
//p0.innerHTML = "执行结束";
postMessage("执行结束");