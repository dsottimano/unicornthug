console.log("js file is working")
var bg = 0;
var brianHealth = 100;



$(document).keydown(function (e) {
    if (e.keyCode == 39) {
        //right, slap function
        $("#myAnimation").addClass("flipper");
        $("#myAnimation").attr("src", "images/ready.png");
        $("#myAnimation").animate({
            left: "+1100",
        }, 500);
        $("#myAnimation").animate({
            left: "50"
        }, 700);

        setTimeout(function () {
            $("#powpow").toggleClass("hidePow");
            $("#brian").toggleClass("hideBrian");

        }, 500);

        setTimeout(function () {
            $("#powpow").toggleClass("hidePow");
            $("#brian").toggleClass("hideBrian");

        }, 900);


        checkHealth(30)
        //return false;
    }
});

$(document).keydown(function (e) {
    //left
    if (e.keyCode == 37) {
        changeBg();
        return false;
    }
});


$(document).keydown(function (e) {
    //up dive attack
    if (e.keyCode == 38) {
        console.log("working")


        $("#myAnimation").removeClass("flipper");
        $("#myAnimation").addClass("smaller");

        $("#myAnimation").attr("src", "images/dive.gif");
        $("#myAnimation").animate({
            left: "+1100",
        }, 500);
        $("#myAnimation").animate({
            left: "50"
        }, 700);

        setTimeout(function () {
            $("#powpow").toggleClass("hidePow");
            $("#brian").toggleClass("hideBrian");

        }, 500);

        setTimeout(function () {
            $("#powpow").toggleClass("hidePow");
            $("#brian").toggleClass("hideBrian");

        }, 900);


        checkHealth(20)
        //return false;
    }
});


var fightBackgrounds = [{
        name: "bg1",
        cssValue: "background:url('images/fightback.gif') no-repeat center center;min-height:100%;background-size:cover;height:100vh;",
    },
    {
        name: "bg2",
        cssValue: "background:url('images/fightback2.gif') no-repeat center center;min-height:100%;background-size:cover;height:100vh;"
    },
    {
        name: "bg3",
        cssValue: "background:url('images/fightback3.gif') no-repeat center center;min-height:100%;background-size:cover;height:100vh;"
    },
    {
        name: "bg4",
        cssValue: "background:url('images/fightback4.gif') no-repeat center center;min-height:100%;background-size:cover;height:100vh;"
    }
];

function changeBg() {
    console.log(bg)
    if (bg === 4) {
        bg = 0;
    }

    document.getElementById("changeBg").style = fightBackgrounds[bg].cssValue;
    bg++;
}




function checkHealth(suggestedHit) {
    console.log("check brian's health" + brianHealth)
    if ((brianHealth - suggestedHit) < 0) {
        brianHealth = 0;
        document.getElementById("healthmeter").innerHTML = brianHealth;

        setTimeout(function () {
            $("#brian").attr("src", "images/brianbeatup.png");
            $("#brian").toggleClass("flipper");
        }, 900) 
        
        setTimeout(function () {

            $("#promptBox").removeClass("hidePrompt");
            $("#promptTitle").removeClass("hidePrompt");
            $("#promptButton").removeClass("hidePrompt");
            $("#brian").attr("src", "images/briannormal.png");
        }, 2500);


    }

    if (brianHealth - suggestedHit > 0) {
        hit(suggestedHit)
    }

}

function hit(hitpoints) {

    brianHealth = brianHealth - hitpoints;
    document.getElementById("healthmeter").innerHTML = brianHealth;
}


function reset() {
    brianHealth = 0;
    $("#promptBox").addClass("hidePrompt");
    $("#brian").attr("src", "images/briannormal.png");

}