$(function () {
    $(window).resize(function () {
        refresh();
    });

    function refresh() {
        window.location.reload();
    }

    $("#navbar .nav>li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".nav").singlePageNav({
        offset: 70
    });

    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("#carousel").carousel({interval: 3000});

    var cur = 0;
    var imgLen = $(".machineImg li").length;

    $(".dirl").click(function (e) {
        $(this).addClass("checked").css("textDecoration", " none").siblings().removeClass("checked");
        if (cur == imgLen - 1) {
            return false;
        } else {
            cur++;
        }
        change();
        e.preventDefault();

    });
    $(".dirr").click(function (e) {
        $(this).addClass("checked").css("textDecoration", " none").siblings().removeClass("checked");
        if (cur <= 0) {
            return false;
        } else {
            cur--;
        }
        change();
        e.preventDefault();

    });

    function change() {
        var imgLength = $(".machineImg li").outerWidth();
        $(".machineImg").animate({"left": -imgLength * cur}, 300);
        var text = $(".machineImg img").eq(cur).attr("alt");
        $(".machineText span").text(text);
    }

    //hot
    var hotHeight = $(".hotImg").height();
    $(".recommend").height(hotHeight);
    //STORE LOCATION
    $("#address .col-md-3").hover(function () {
        $(this).addClass("show").siblings().removeClass("show");
    });
    //about
    var aboutHeight = $(".aboutText").outerHeight();
    $("#about").height(aboutHeight);

});
