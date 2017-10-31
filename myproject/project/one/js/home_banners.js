(()=>{
   $.ajax({
    type:"get",
    url:"../data/banners.php",
    success:function(data){
      var html="";
      for(var i=0;i<data.length;i++){
        var p=data[i];
         html+=`<li class="banner${p.cid}"><a href="${p.href}"><img src="${p.img}"/></a></li>`
      }
      console.log(html);
      $("div.am-slider>ul.am-slides").html(html);
    },
    error:function(){
      alert("网络故障，请检查网络");
    }
});
    (function() {
       $('.am-slider').flexslider();
    });
    $(document).ready(function() {
      $("li").hover(function() {
        $(".category-content .category-list li.first .menu-in").css("display", "none");
        $(".category-content .category-list li.first").removeClass("hover");
        $(this).addClass("hover");
        $(this).children("div.menu-in").css("display", "block")
      }, function() {
        $(this).removeClass("hover")
        $(this).children("div.menu-in").css("display", "none")
      });
    })
})()