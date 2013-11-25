/*
$(doc).on("mouseover", function (a) {
    var style= $(a.target).attr("style") ;
    $(a.target).data("reunion-style",style);
    $(a.target).css("border", "1px solid red")
})
$(doc).on("mouseout", function (a) {
    RemoveStyle(a);
})
*/

document.addEventListener("mouseover",function(e){
   console.log(e);
})