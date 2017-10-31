/*************dropdown*****************/
$("[data-trigger=dropdown]").parent()
  .hover(function(){
    $(this).children().last()
            .toggleClass("in")
});