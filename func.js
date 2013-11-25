(function($){
    var doc = document;
    var   RemoveStyle=function(a){
        var style=  $(a.target).data("reunionstyle");
        console.log("after:"+style);
        if(style)
            $(a.target).attr("style", style)
        else
            $(a.target).removeAttr("style")
    }
    /*$(doc).on("click", function (a) {
     if(_CURRENT_REG_TEXT){
     RemoveStyle(a);
     $(_CURRENT_REG_TEXT).val(a.target.outerHTML)
     }
     console.log(a.target.innerHTML);
     console.log(a.target.outerHTML);

     return false
     })*/
    $(doc).on("mouseover", function (a) {
        var style= $(a.target).attr("style")||"" ;
        console.log("before"+style);
        $(a.target).data("reunionstyle",style);
        $(a.target).css("border", "1px solid red")
    })
    $(doc).on("mouseout", function (a) {

        RemoveStyle(a);
    })
})(jQuery)
