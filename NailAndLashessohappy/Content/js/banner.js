$(document).ready(function () {
    var Interval;
    Bannerauto();
    
    function Bannerauto() {
        Interval = setInterval(function () {
            if ($(".nextbox").is(":hover") == false && document.hasFocus() && $(window).width() > 900) {
                BannerNext(3);
            }
        }, 10000);
    }

    $(".next").mouseover(function () {
        var id = $(this).attr("id").replace("next", "");
        if ($("#flag").html() != id) {
            $("#next" + id.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center -13px no-repeat');
        }
    });

    $(".next").mouseleave(function () {
        var id = $(this).attr("id").replace("next", "");
        if ($("#flag").html() != id) {
            $("#next" + id.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center 0px no-repeat');
        }
    });


    $(".next").click(function () {
        clearInterval(Interval);
        var id = $(this).attr("id").replace("next", "");
        if ($("#flag").html() != id) {
            BannerClick(id);
        }
    });


    function BannerClick(number) {
        for (i = 1; i <= 3; i++) {
            //close old banner
            if (i != number) {
                $("#loadbanner" + i.toString()).stop(true, true).fadeIn(50);
                $("#banner" + i.toString()).fadeOut(1600);
                $("#next" + i.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center 0px no-repeat');
            }
            //open new banner
            else {
                $("#loadbanner" + i.toString()).stop(true, true).fadeOut(300);
                $("#banner" + i.toString()).fadeIn(800);
                $("#next" + i.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center -13px no-repeat'); //giu nut
                $("#flag").html(i.toString());
            }
        }
        Bannerauto();
    }

    function BannerNext(count) {
        var iNext;
        iNext = $("#flag").html();
        $("#loadbanner" + iNext.toString()).stop(true, true).fadeIn(50);
        $("#banner" + iNext.toString()).fadeOut(1600);
        $("#next" + iNext.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center 0px no-repeat');
        if (iNext == count) {
            iNext = "1";
        }
        else {
            iNext = (parseInt(iNext) + 1).toString();
        }
        $("#loadbanner" + iNext.toString()).stop(true, true).fadeOut(300);
        $("#banner" + iNext.toString()).fadeIn(800);
        $("#next" + iNext.toString()).css('background', 'url(../Themes/QueenNails/Content/images/next.png)center -13px no-repeat'); //giu nut
        $("#flag").html(iNext.toString());
    }




});
