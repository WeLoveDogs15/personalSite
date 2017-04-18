$(document).ready(function () {

    //Top Left
    $(".divLeft").mouseenter(function () {
        $(this).css("background-color", "#F7F786");
    });
    $(".divLeft").mouseleave(function () {
        $(this).css("background-color", "#8B9FA7");
    });
    //Top Right
    $(".divRight").mouseenter(function () {
        $(this).css("background-color", "#52F72E");
    });
    $(".divRight").mouseleave(function () {
        $(this).css("background-color", "#8B9FA7");
    })
    //Top Center
    $(".title").mouseenter(function () {
        $(this).css("background-color", "#F99949");
    });
    $(".title").mouseleave(function () {
        $(this).css("background-color", "#1F2B30");
    })
    //Lower Left
    $(".divLearn").mouseenter(function () {
        $(this).css("background-color", "#2E96F7");
    });
    $(".divLearn").mouseleave(function () {
        $(this).css("background-color", "#8B9FA7");
    })
    //Lower Center
    $(".divTravel").mouseenter(function () {
        $(this).css("background-color", "#BB88E7");
    });
    $(".divTravel").mouseleave(function () {
        $(this).css("background-color", "#8B9FA7");
    })
    //Lower Right
    $(".divAspire").mouseenter(function () {
        $(this).css("background-color", "#E588C7");
    });
    $(".divAspire").mouseleave(function () {
        $(this).css("background-color", "#8B9FA7");
    })

    //Get a hint
    $("h5").hide();

    $("h4").click(function () {
        $("h5").slideDown(1000);
    });

    $("h4").click(function () {
        $("h5").slideUp(3000);
    });
    
    $("divRight").click(function () {

            var secretNum = 15;

            this.guessNum = function (num) {
                if (num > 78) {
                    return "Lower";
                } else if (num < 78) {
                    return "Higher";
                } else {
                    return "You guessed it!";
                }
            }
        var secret = new secretCode();
    });

    });






