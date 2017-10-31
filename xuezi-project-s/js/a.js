var a=[1,5,0,6,0,4,5,0,1234,36,574,21];
a=a.sort((a,b)=>a-b);
var k=0;
while(a[k] != 0){                               
                k++;  
        }  
        for(var i = k+1; i < a.length;i++){             
            if(a[k]==0){                                  
                if(a[i]!=0)                            
                {  
                    a[k]=a[i];  
                    a[i]=0;  
                    k++;                                 
                }  
            }  
        }  
      
console.log(a);