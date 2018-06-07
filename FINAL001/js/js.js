$(document).ready(function () {
    $("#1").click(function () {
        $("#collapseExample").show();
        $("#collapseExample2").hide();
        $("#collapseExample3").hide();
        $("#collapseExample4").hide();
        $("#collapseExample5").hide();
        $("#collapseExample6").hide();
    })
    $("#2").click(function () {
        $("#collapseExample2").show();
        $("#collapseExample").hide();
        $("#collapseExample3").hide();
        $("#collapseExample4").hide();
        $("#collapseExample5").hide();
        $("#collapseExample6").hide();
    })
    $("#3").click(function () {
        $("#collapseExample3").show();
        $("#collapseExample").hide();
        $("#collapseExample2").hide();
        $("#collapseExample4").hide();
        $("#collapseExample5").hide();
        $("#collapseExample6").hide();
    })
    $("#4").click(function () {
        $("#collapseExample4").show();
        $("#collapseExample").hide();
        $("#collapseExample3").hide();
        $("#collapseExample2").hide();
        $("#collapseExample5").hide();
        $("#collapseExample6").hide();
    })
    $("#5").click(function () {
        $("#collapseExample5").show();
        $("#collapseExample").hide();
        $("#collapseExample3").hide();
        $("#collapseExample4").hide();
        $("#collapseExample2").hide();
        $("#collapseExample6").hide();
    })
    $("#6").click(function () {
        $("#collapseExample6").show();
        $("#collapseExample").hide();
        $("#collapseExample3").hide();
        $("#collapseExample4").hide();
        $("#collapseExample5").hide();
        $("#collapseExample2").hide();
    });
});
