$(document).ready( function() {
    //COLOR ONE
    //get input value
    let inputOne = $('.color-one-color'); //assign variable to input box
    let inputOneValue;  //variable to store input value
    inputOne.keyup( function() { //capture text input and assign new value
        inputOneValue = inputOne.val();
        console.log(inputOneValue);

        $('.color-one').css('background-color', inputOneValue);
        

        if( inputOneValue.charAt(0) != '#') {
            $('.color-one').css('background-color', '#' + inputOneValue);
        }

        let navBar = $('.menu');
        navBar.css('background-color', inputOneValue);
    });


    //COLOR TWO
    //get input value
    let inputTwo = $('.color-two-color'); //assign variable to input box
    let inputTwoValue;  //variable to store input value
    inputTwo.keyup( function() { //capture text input and assign new value
        inputTwoValue = inputTwo.val();
        console.log(inputTwoValue);

        $('.color-two').css('background-color', inputTwoValue);

        if( inputTwoValue.charAt(0) != '#') {
            $('.color-two').css('background-color', '#' + inputTwoValue);
        }
    });


    //COLOR THREE
    //get input value
    let inputThree = $('.color-three-color'); //assign variable to input box
    let inputThreeValue;  //variable to store input value
    inputThree.keyup( function() { //capture text input and assign new value
        inputThreeValue = inputThree.val();
        console.log(inputThreeValue);

        $('.color-three').css('background-color', inputThreeValue); //set new bgrnd color

        if( inputThreeValue.charAt(0) != '#') { //check for '#' entry
            $('.color-three').css('background-color', '#' + inputThreeValue); //assign bgrnd color with '#'
        }
    });


    //COLOR FOUR
    //get input value
    let inputFour = $('.color-four-color'); //assign variable to input box
    let inputFourValue;  //variable to store input value
    inputFour.keyup( function() { //capture text input and assign new value
        inputFourValue = inputFour.val();
        console.log(inputFourValue);

        $('.color-four').css('background-color', inputFourValue); //set new bgrnd color

        if( inputFourValue.charAt(0) != '#') { //check for '#' entry
            $('.color-four').css('background-color', '#' + inputFourValue); //assign bgrnd color with '#'
        }
    });


    //COLOR FIVE
    //get input value
    let inputFive = $('.color-five-color'); //assign variable to input box
    let inputFiveValue;  //variable to store input value
    inputFive.keyup( function() { //capture text input and assign new value
        inputFiveValue = inputFive.val();
        console.log(inputFiveValue);

        $('.color-five').css('background-color', inputFiveValue); //set new bgrnd color

        if( inputFiveValue.charAt(0) != '#') { //check for '#' entry
            $('.color-five').css('background-color', '#' + inputFiveValue); //assign bgrnd color with '#'
        }
    });


    //COLOR SIX
    //get input value
    let inputSix = $('.color-six-color'); //assign variable to input box
    let inputSixValue;  //variable to store input value
    inputSix.keyup( function() { //capture text input and assign new value
        inputSixValue = inputSix.val();
        console.log(inputSixValue);

        $('.color-six').css('background-color', inputSixValue); //set new bgrnd color

        if( inputSixValue.charAt(0) != '#') { //check for '#' entry
            $('.color-six').css('background-color', '#' + inputSixValue); //assign bgrnd color with '#'
        }
    });


    //NAV FONT COLOR
    //get input value
    let navFontColor = $('.nav-font-color'); //assign variable to input box
    let navFontColorValue;  //variable to store input value
    navFontColor.keyup( function() { //capture text input and assign new value
        navFontColorValue = navFontColor.val();
        console.log(navFontColorValue);

        $('.link').css('color', navFontColorValue); //set new font color

        if( navFontColorValue.charAt(0) != '#') { //check for '#' entry
            $('.link').css('color', '#' + navFontColorValue); //assign color with '#'
        }
    });

    

    //Get list of current colors

    let navBarRGB = $('.color-one').css('backgroundColor');
    navBarColor = rgb2hex(navBarRGB);
    console.log(navBarColor);

    let colorTwoRGB = $('.color-two').css('backgroundColor');
    colorTwo = rgb2hex(colorTwoRGB);
    console.log(colorTwo);

    let colorThreeRGB = $('.color-three').css('backgroundColor');
    colorThree = rgb2hex(colorThreeRGB);
    console.log(colorThree);

    let colorFourRGB = $('.color-four').css('backgroundColor');
    colorFour = rgb2hex(colorFourRGB);
    console.log(colorFour);

    let colorFiveRGB = $('.color-five').css('backgroundColor');
    colorFive = rgb2hex(colorFiveRGB);
    console.log(colorFive);



    

    //Function to convert rgb color to hex format
    function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function hex(x) {
    let hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
    

    
    

    

    
        

        

   
    
    
    

});