console.log("wlecom to the console")

//Global Variables
//-------------------------------------------
var wins = 0;
var losses = 0;
// var goalNumber = Math.floor(Math.random() * 101) + 19;
//         $("#goalNumber").text(goalNumber);
var totalScore = 0;

// //Functions
//---------------------------------------------------
function makeDivs(){
    var images = ["assets/images/Crystal1.png", "assets/images/Crystal2.png", "assets/images/Crystal3.png", "assets/images/Crystal5.png"]
    images.forEach(function(imageUrl){
        var crystal = $("<img>")
        crystal.attr("src", imageUrl)
        var randomVal = Math.floor(Math.random() * 12) + 1;
        crystal.attr("data-points", randomVal);
        crystal.addClass("crystal")
        $(".divContainer").append(crystal);
    })
}

function playGame(){
    $(".crystal").on("click", function(){

        console.log(this);
        console.log($(this));

        var crystalValue = ($(this).attr("data-points"));
        crystalValue = parseInt(crystalValue);
        
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);

        if (totalScore === goalNumber) {
        reset();
        wins++; 
        alert("You win!");
        
        } else if (totalScore >= goalNumber) {
        reset();
        losses++;
        alert("You lose!!");
        
        }

        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("totalScore").textContent = totalScore;
    });
    var goalNumber = Math.floor(Math.random() * 101) + 19;
        $("#goalNumber").text(goalNumber);
}

function reset(){
    var goalNumber = Math.floor(Math.random() * 101) + 19;
     $("#goalNumber").text(goalNumber);
    totalScore = 0;
    $(".divContainer").html("");
    makeDivs();
    playGame();
 
}

//Main Proces
//------------------------------------------------

makeDivs();

playGame();
