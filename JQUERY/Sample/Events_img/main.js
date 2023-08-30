$("document").ready(function(){

    // $("#img1").mouseenter(function () { 
    //     $("#img1").css('width', '500px');
    // });

    // $("#img1").mouseleave(function () { 
    //     $("#img1").css('width', '200px');
    // });


    $("#img1").hover(
    function () { 
        $("#img1").css('width', '500px');
    }, 
    function () { 
        $("#img1").css('width', '200px');
        }
    );
})