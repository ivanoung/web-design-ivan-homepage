

function dashOut (arr){
    
    if (i<arr.length) {
        console.log(arr[i]);
        document.querySelector(".insert").textContent += arr[i];
        i++;
        console.log ('The i count: ' + i);
        setTimeout(function(){dashOut(arr)},interval(arr[i]));
    }
    
}


function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}



var inThatText  = document.querySelector(".text-insert");



$(document).ready(function(){
    var contArr = ["Ivan Oung.", 
    "aspired full-stack developer to-be", 
    "digital marketer", 
    "translator", 
    "volunteer English tutor", 
    "as single as playing KOF without a player 2", 
    " kinda weird", 
    "always hungry", 
    "always hording over the keyboard", 
    "always intrigued by new ideas and knowledge", 
    "a relentless learner"
];
var talkingTopic = [
    "digital marketing.",
    "your favorite keyboard.",
    "new business ventures.",
    "growing your business.",
    "bacon.",
    "interesting projects."
];


    function deleteWords(){
        console.log(inThatText.textContent.length);
        inThatText.textContent = inThatText.textContent.slice(0, -1);
            // $(".textCont").text() = $(".textCont").text() + arr[i];
            // clickSound.play();
        if (inThatText.textContent.length>0){
            setTimeout(function(){deleteWords();},60);
        }
    }


    function talkAboutWhat(arr, selector) {
        
        // 1. A random number of how long the array is
        let randomNum = Math.floor(Math.random() * (arr.length));
        // 2. Feed the sentence into the targetSection
        selector.text(arr[randomNum]);

    }


    setInterval(() => {talkAboutWhat(talkingTopic,$("#lineInsert"))}, 2000);
    $(".menu").toggle();
    $(".text-insert").text(contArr[0]);

    $("#exit-icon").click( ()=> {
        $(".menu").toggle();
    });

    $(".menu-links, .social-icons").hover(
        function(){$(this).addClass("raise");},
        function(){$(this).removeClass("raise");}
    )
});




