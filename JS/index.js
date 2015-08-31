$("document").ready(function() {

console.log("test");

$(".add").click(function(){
        $(".addAShow").toggle();
    });

$(".review1").click(function(){
        $(".findapod2").toggle();
    });

$(".podcastslist").on("mouseover", function(){
        $(".menudropdown").css("visibility","visible");
      });

$(".menudropdown").on("mouseover", function(){
        $(".menudropdown").css("visibility","visible");
      });


$(".podcastslist").on("mouseleave", function(){
              $(".menudropdown").css("visibility","hidden");
            });

$(".menudropdown").on("mouseleave", function(){
              $(".menudropdown").css("visibility","hidden");
            });


});
