gsap.registerPlugin(MotionPathPlugin);
logoAnimation = gsap.to("#beat", 
    {
        x:10,
        y:10,
        duration: 1,
        paused: true,
        ease: "power4",
        repeat: -1,
        scale:2,
        motionPath: {
            path: "#ecg",
            align: "#ecg",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: -0.035,
            end:0.97,
        }
    }
    );
$("svg#main-logo").hover(function() {
        logoAnimation.play();
        logoAnimation.eventCallback("onRepeat", function(){});
    }, function() {
        logoAnimation.eventCallback("onRepeat", function() { 
            logoAnimation.pause();
        });
    });