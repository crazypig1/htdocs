 function rn(min,max){
     var n = Math.random()*(max-min)+min;
     return Math.floor(n);
 }
function rc(min,max){
   var r = rn(min,max);
   var g = rn(min,max);
   var b = rn(min,max);
   return `rgb(${r},${g},${b})`;
}