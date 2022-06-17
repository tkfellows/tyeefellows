// Title: Javascript file for the 5H's of ACLS NFT
// Author: Tyee Fellows MD
// Published date: June 15, 2022

function animate5H() {
    // Defining matrix of animation info and their coordinates
    var fiveH = [
        ["Hypovolemia","6px",["path1505","0px","78px","0px","37px","scale(1)","scale(0.2)"],["","","","","","",""]],
        ["Hypoxia","6px",["path1505","0px","78px","0px","34px","scale(1)","scale(0.2)"],["path1064","0px","67px","0px","16px","scale(1)","scale(0.3)"]],
        ["Hydrogen ion (Acidosis)","4.5px",["path1508", "0px", "45px", "0px", "-74px","",""],["path1052", "0px", "80px", "0px", "18px","scale(1)","scale(0.3)"]],
        ["Hyper/Hypokalemia","5px",["path1502", "0px", "-40px", "0px", "-74px","",""],["path1052","0px", "80px", "0px", "18px","scale(1)","scale(0.3)"]],
        ["Hyper/Hypothermia","5px",["path1505","0px","78px","0px","37px","scale(1)","scale(0.2)"],["path1061","0px","64px","0px","30px","scale(1)","scale(0.3)"]]
    ];

    // Pulling animation text element from HTML document
    var iconInfoColor = "red";
    var animationDuration = 1500;

    let i = 0;
    const cycle5H = () => {
        // var iconInfo = document.getElementById("m-icon-info");
        // if (iconInfo != null) {
        //     iconInfo.setAttribute('id','m-5H-info');
        // }
        var iconInfo = document.getElementById("m-5H-info");

        // Assigning the animation text content 
        iconInfo.innerHTML = fiveH[i][0];
        iconInfo.style.fill = iconInfoColor;
        iconInfo.style.fontSize = fiveH[i][1];

        // Defining the loop timing (1.5 second with a single iteration for each loop)
        var iconTiming = {
            duration: animationDuration,
            iterations: 1
        }  

        // Defining the icon1 coordinates for translation and scale for each item in fiveH matrix
        var icon1Animation = [
            { transform: `translate(${fiveH[i][2][1]}, ${fiveH[i][2][3]}) ${fiveH[i][2][5]}`, fill: iconInfoColor},
            { transform: `translate(${fiveH[i][2][2]}, ${fiveH[i][2][4]}) ${fiveH[i][2][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveH[i][2][2]}, ${fiveH[i][2][4]}) ${fiveH[i][2][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveH[i][2][2]}, ${fiveH[i][2][4]}) ${fiveH[i][2][6]}`, fill: iconInfoColor}      
        ];

        // Defining the icon2 coordinates for translation and scale for each item in fiveH matrix
        var icon2Animation = [
            { transform: `translate(${fiveH[i][3][1]}, ${fiveH[i][3][3]}) ${fiveH[i][3][5]}`, fill: iconInfoColor},
            { transform: `translate(${fiveH[i][3][2]}, ${fiveH[i][3][4]}) ${fiveH[i][3][6]}`, fill: iconInfoColor},      
            { transform: `translate(${fiveH[i][3][2]}, ${fiveH[i][3][4]}) ${fiveH[i][3][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveH[i][3][2]}, ${fiveH[i][3][4]}) ${fiveH[i][3][6]}`, fill: iconInfoColor}
        ];

        // Running distinct code based on group status for icon1.
        var icon1 = document.getElementById(`${fiveH[i][2][0]}`);
        icon1.animate(icon1Animation, iconTiming);

        // Running distinct code based on group status for icon2. Hypovolemia requires only one icon1 animation,
        if (!fiveH[i][0].startsWith("Hypovolemia")) {
            var icon2 = document.getElementById(`${fiveH[i][3][0]}`);
            icon2.animate(icon2Animation, iconTiming);
        }

        // Defining the iteration and the modal of the above loop
        i = ++i % fiveH.length;
    };
    // Running cycle5H() after svg injected and setting the during of each cycle for each icon transition
    cycle5H()
    setInterval(cycle5H, animationDuration);
}

function animate5T() {
    // Defining matrix of animation info and their coordinates
    var fiveT = [
        ["Thrombus (MI)","6px",["path33051-1", "-5px", "17px", "0px", "-46px","",""],["path33031-9", "0px", "38.5px", "0px", "-69px","",""]],
        ["Tamponade","6px",["path33051-1", "-5px", "23px", "0px", "-46px","",""],["path3159","1px", "-10px", "6px", "-61px","",""]],
        ["Thrombus (PE)","6px",["path33047-8", "-4px", "17px", "-3px", "-96px","",""],["path33031-9", "-3px", "33px", "-3px", "-71px","",""]],
        ["Tension (PTX)","6px",["path33047-8", "-4px", "22px", "-3px", "-96px","",""],["path3159","1px", "-12px", "6px", "-61px","",""]],
        ["Toxins","7px",["path33049-8", "-4px", "119px", "-3px", "62px","scale(1)","scale(0.2)"],["","","","","","",""]]
    ];

    // Pulling animation text element from HTML document
    var iconInfoColor = "red";
    var animationDuration = 1500;

    let i = 0;
    const cycle5T = () => {
        // var iconInfo = document.getElementById("m-5H-info");
        // if (iconInfo != null) {
        //     iconInfo.setAttribute('id','m-5T-info');
        // }
        var iconInfo = document.getElementById("m-5T-info");

        // Assigning the animation text content 
        iconInfo.innerHTML = fiveT[i][0];
        iconInfo.style.fill = iconInfoColor;
        iconInfo.style.fontSize = fiveT[i][1];

        // Defining the loop timing (1.5 second with a single iteration for each loop)
        var iconTiming = {
            duration: animationDuration,
            iterations: 1
        }  

        // Defining the icon1 coordinates for translation and scale for each item in fiveT matrix
        var icon1Animation = [
            { transform: `translate(${fiveT[i][2][1]}, ${fiveT[i][2][3]}) ${fiveT[i][2][5]}`, fill: iconInfoColor},
            { transform: `translate(${fiveT[i][2][2]}, ${fiveT[i][2][4]}) ${fiveT[i][2][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveT[i][2][2]}, ${fiveT[i][2][4]}) ${fiveT[i][2][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveT[i][2][2]}, ${fiveT[i][2][4]}) ${fiveT[i][2][6]}`, fill: iconInfoColor}    
        ];

        // Defining the icon2 coordinates for translation and scale for each item in fiveT matrix
        var icon2Animation = [
            { transform: `translate(${fiveT[i][3][1]}, ${fiveT[i][3][3]}) ${fiveT[i][3][5]}`, fill: iconInfoColor},
            { transform: `translate(${fiveT[i][3][2]}, ${fiveT[i][3][4]}) ${fiveT[i][3][6]}`, fill: iconInfoColor},      
            { transform: `translate(${fiveT[i][3][2]}, ${fiveT[i][3][4]}) ${fiveT[i][3][6]}`, fill: iconInfoColor},
            { transform: `translate(${fiveT[i][3][2]}, ${fiveT[i][3][4]}) ${fiveT[i][3][6]}`, fill: iconInfoColor}
        ];

        // Running distinct code based on group status for icon1.
        var icon1 = document.getElementById(`${fiveT[i][2][0]}`);
        icon1.animate(icon1Animation, iconTiming);

        // Running distinct code based on group status for icon2. Toxins requires only one icon1 animation,
        if (!fiveT[i][0].startsWith("Toxins")) {
            var icon2 = document.getElementById(`${fiveT[i][3][0]}`);
            icon2.animate(icon2Animation, iconTiming);
        }

        // Defining the iteration and the modal of the above loop
        i = ++i % fiveT.length;
    };
    // Running cycle5T() after svg injected and setting the during of each cycle for each icon transition
    cycle5T()
    setInterval(cycle5T, animationDuration);
}

function animateBreath() {
    // Setting the inner text variables and the timing of the NFT
    var breathText = ["breath in", "hold", "breath out", "hold"];
    var textDuration = 4000;

    // Function to cycle the text
    let i = 0;
    const cycleText = () => {
        // Pulling breath text element from HTML document
        var textInfo = document.getElementById("breath-text");
        // Assigning the animation text content 
        textInfo.innerHTML = breathText[i];
        // Defining the iteration and the modal text loop
        i = ++i % breathText.length;
      };
    cycleText()
    setInterval(cycleText, textDuration);
}


SVGInject.setOptions({
    makeIdsUnique: false, // do not make ids used within the SVG unique 
    afterInject: function(img, svg) {
        animate5H()
        animate5T()
        animateBreath()
      },
  });

  document.addEventListener('DOMContentLoaded', function() {
    // inject all img elements with class name `injectable`
    SVGInject(document.querySelectorAll('img.injectable'), {
      onAllFinish: function() {
        // the SVG injection has finished for all three images
      }
    });
  });