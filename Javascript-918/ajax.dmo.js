function ajax(method,url,data="",dataType="json"){
                     // then   catch
  return new Promise((resolve,reject)=>{
    //1銆佽幏鍙� xhr
    var xhr=new XMLHttpRequest();
    //2銆佸垱寤鸿姹�
    xhr.open(method,url,true);
    //3銆佽缃姹傛秷鎭ご
    if(method=="post"){
      xhr.setRequestHeader(
        "Content-Type", "application/x-www-form-urlencoded");
    }
    //4銆佽缃洖璋�
    xhr.onreadystatechange=function(){
      if(xhr.readyState == 4)
        if(xhr.status == 200){
          if(dataType=="json")
            resolve(JSON.parse(xhr.responseText));
          else
            resolve(xhr.responseText);
        }else
          reject("璇锋眰鍑洪敊:"+xhr.status);
    }
    //5銆佸彂閫�
    xhr.send(data);
  })
  //return?
}