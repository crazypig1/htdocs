//计算累加和
function getSum(num){
   var sum = 0;
    for(var i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}
//等待接收UI线程发送数值
onmessage = function(e){
 var n = e.data;
 // console.time("计算");
 var rs = getSum(n);   //计算累加
 // console.timeEnd("计算");
 postMessage(rs);       //将计算的结果发送UI线程
}

