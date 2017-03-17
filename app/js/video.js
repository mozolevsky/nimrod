
$("#videocover").click(function() {
    $("#myvideo").attr("controls", true);
    var video = $("#myvideo").get(0);
    video.play();

    $(this).css("visibility", "hidden");
    return false;
});

$("#myvideo").bind("pause ended", function() {
    $("#videocover").css("visibility", "visible");
    $("#myvideo").attr("controls", false);
});



