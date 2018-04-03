$(document).ready( function() {

    //NAV BAR COLOR
    //get input value
    let navBarColor = $('.nav-bar-color'); //assign variable to input box
    let navBarColorValue;  //variable to store input value
    navBarColor.keyup( function() { //capture text input and assign new value
        navBarColorValue = navBarColor.val();
        console.log(navBarColorValue);

        $('.menu').css('background-color', navBarColorValue); //set new font color
        $('.color-one').css('background-color', navBarColorValue);

        if( navBarColorValue.charAt(0) !== '#') { //check for '#' entry
            $('.menu').css('background-color', '#' + navBarColorValue);
            $('.color-one').css('background-color', '#' + navBarColorValue);  //assign color with '#'
        }
    });

       //HEADING COLOR
    //get input value
    let headingColor = $('.heading-color'); //assign variable to input box
    let headingColorValue;  //variable to store input value
    headingColor.keyup( function() { //capture text input and assign new value
        headingColorValue = headingColor.val();
        console.log(headingColorValue);

        $('.bio-header').css('color', headingColorValue);
        $('.color-two').css('background-color', headingColorValue); //set new font color

        if( headingColorValue.charAt(0) !== '#') { //check for '#' entry
            $('.bio-header').css('color', '#' + headingColorValue);
            $('.color-two').css('background-color', '#' + headingColorValue); //assign color with '#'
        }
    });

    //BODY BACKGROUND COLOR
    //get input value
    let bodyColor = $('.body-color'); //assign variable to input box
    let bodyColorValue;  //variable to store input value
    bodyColor.keyup( function() { //capture text input and assign new value
        bodyColorValue = bodyColor.val();
        console.log(bodyColorValue);

        $('.preview').css('background-color', bodyColorValue);
        $('.color-three').css('background-color', bodyColorValue); //set new font color

        if( bodyColorValue.charAt(0) !== '#') { //check for '#' entry
            $('.preview').css('background-color', '#' + bodyColorValue);
            $('.color-three').css('background-color', '#' + bodyColorValue); //assign color with '#'
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

        if( navFontColorValue.charAt(0) !== '#') { //check for '#' entry
            $('.link').css('color', '#' + navFontColorValue); //assign color with '#'
        }
    });


    //JUMBOTRON BACKGROUND COLOR
    //get input value
    let jumboColor = $('.jumbo-color'); //assign variable to input box
    let jumboColorValue;  //variable to store input value
    console.log(jumboColorValue);
    jumboColor.keyup( function() { //capture text input and assign new value
        jumboColorValue = jumboColor.val();
        console.log(jumboColorValue);

        if( jumboColorValue.charAt(0) !== '#') { //check for '#' entry
        $('.header-image').css('background-color', '#' + jumboColorValue); //assign color with '#'
        }

        $('.header-image').css('background-color', jumboColorValue); //set new font color

        
    });


    //JUMBOTRON BACKGROUND COLOR
    //get input value
    let bodyFontColor = $('.body-font-color'); //assign variable to input box
    let bodyFontColorValue;  //variable to store input value
    bodyFontColor.keyup( function() { //capture text input and assign new value
        bodyFontColorValue = bodyFontColor.val();
        console.log(bodyFontColorValue);

        $('.body-text').css('color', bodyFontColorValue); //set new font color

        if( bodyFontColorValue.charAt(0) !==     '#') { //check for '#' entry
        $('.body-text').css('color', '#' + bodyFontColorValue); //assign color with '#'
        }
    });

    

    // //Get list of current colors

    // let navBarRGB = $('.color-one').css('backgroundColor');
    // navBarColor = rgb2hex(navBarRGB);
    // console.log(navBarColor);

    // let colorTwoRGB = $('.color-two').css('backgroundColor');
    // colorTwo = rgb2hex(colorTwoRGB);
    // console.log(colorTwo);

    // let colorThreeRGB = $('.color-three').css('backgroundColor');
    // colorThree = rgb2hex(colorThreeRGB);
    // console.log(colorThree);

    // let colorFourRGB = $('.color-four').css('backgroundColor');
    // colorFour = rgb2hex(colorFourRGB);
    // console.log(colorFour);

    // let colorFiveRGB = $('.color-five').css('backgroundColor');
    // colorFive = rgb2hex(colorFiveRGB);
    // console.log(colorFive);



    

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