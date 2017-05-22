$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: false,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 4500,
/*        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "images/tn-model1.png",
            "images/tn-model2.png",
            "images/tn-model3.png"
        ]
*/        
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");

});