'use strict';

$(document).ready(function () {

    //NAV BAR COLOR
    //get input value
    var navBarColor = $('.nav-bar-color'); //assign variable to input box
    var navBarColorValue; //variable to store input value
    navBarColor.keyup(function () {
        //capture text input and assign new value
        navBarColorValue = navBarColor.val();
        console.log(navBarColorValue);

        $('.navigation').css('background-color', navBarColorValue); //set new font color
        $('.color-one').css('background-color', navBarColorValue);

        if (navBarColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.navigation').css('background-color', '#' + navBarColorValue);
            $('.color-one').css('background-color', '#' + navBarColorValue); //assign color with '#'
        }
    });

    //HEADING COLOR
    //get input value
    var headingColor = $('.heading-color'); //assign variable to input box
    var headingColorValue; //variable to store input value
    headingColor.keyup(function () {
        //capture text input and assign new value
        headingColorValue = headingColor.val();
        console.log(headingColorValue);

        $('.bio-header').css('color', headingColorValue);
        $('.color-two').css('background-color', headingColorValue); //set new font color

        if (headingColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.bio-header').css('color', '#' + headingColorValue);
            $('.color-two').css('background-color', '#' + headingColorValue); //assign color with '#'
        }
    });

    //BODY BACKGROUND COLOR
    //get input value
    var bodyColor = $('.body-color'); //assign variable to input box
    var bodyColorValue; //variable to store input value
    bodyColor.keyup(function () {
        //capture text input and assign new value
        bodyColorValue = bodyColor.val();
        console.log(bodyColorValue);

        $('.preview').css('background-color', bodyColorValue);
        $('.color-three').css('background-color', bodyColorValue); //set new font color

        if (bodyColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.preview').css('background-color', '#' + bodyColorValue);
            $('.color-three').css('background-color', '#' + bodyColorValue);
        }
    });

    //MAIN ACCENT COLOR
    //get input value
    var mainAccentColor = $('.main-accent-color'); //assign variable to input box
    var mainAccentColorValue; //variable to store input value
    mainAccentColor.keyup(function () {
        //capture text input and assign new value
        mainAccentColorValue = mainAccentColor.val();
        console.log(mainAccentColorValue);

        $('.color-four').css('background-color', mainAccentColorValue); //set new bgrnd color
        $('.big-headings').css('color', mainAccentColorValue); //set new font color

        if (mainAccentColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.color-four').css('background-color', '#' + mainAccentColorValue);
            $('.big-headings').css('color', '#' + mainAccentColorValue);
        }
    });

    //SECONDARY ACCENT COLOR
    //get input value
    var secAccentColor = $('.sec-accent-color'); //assign variable to input box
    var secAccentColorValue; //variable to store input value
    secAccentColor.keyup(function () {
        //capture text input and assign new value
        secAccentColorValue = secAccentColor.val();
        console.log(secAccentColorValue);

        $('.color-five').css('background-color', secAccentColorValue); //set new bgrnd color
        $('.learn-more').css("background-color", secAccentColorValue);

        if (secAccentColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.color-five').css('background-color', '#' + secAccentColorValue);
            $('.learn-more').css('background-color', '#' + secAccentColorValue);
        }
    });

    //NAV FONT COLOR
    //get input value
    var navFontColor = $('.nav-font-color'); //assign variable to input box
    var navFontColorValue; //variable to store input value
    navFontColor.keyup(function () {
        //capture text input and assign new value
        navFontColorValue = navFontColor.val();
        console.log(navFontColorValue);

        $('.link').css('color', navFontColorValue); //set new font color
        $('.burger').css('color', navFontColorValue); //set new font color

        if (navFontColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.link').css('color', '#' + navFontColorValue);
            $('.burger').css('color', '#' + navFontColorValue); //set new font color
        }
    });

    //JUMBOTRON BACKGROUND COLOR
    //get input value
    var jumboColor = $('.jumbo-color'); //assign variable to input box
    var jumboColorValue; //variable to store input value
    console.log(jumboColorValue);
    jumboColor.keyup(function () {
        //capture text input and assign new value
        jumboColorValue = jumboColor.val();
        console.log(jumboColorValue);

        if (jumboColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.header-image').css('background-color', '#' + jumboColorValue); //assign color with '#'
        }

        $('.header-image').css('background-color', jumboColorValue); //set new bgrnd color
    });

    //BODY FONT COLOR
    //get input value
    var bodyFontColor = $('.body-font-color'); //assign variable to input box
    var bodyFontColorValue; //variable to store input value
    bodyFontColor.keyup(function () {
        //capture text input and assign new value
        bodyFontColorValue = bodyFontColor.val();
        console.log(bodyFontColorValue);

        $('.body-text').css('color', bodyFontColorValue); //set new font color

        if (bodyFontColorValue.charAt(0) != '#') {
            //check for '#' entry
            $('.body-text').css('color', '#' + bodyFontColorValue);
        }
    });

    //Function to convert rgb color to hex format
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function hex(x) {
        var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }

    var numberOfColors = 12; //set default color count
    var reload = document.getElementById('re-generate'); //set button as variable
    var colorContainer = document.getElementById('sample-container'); //assign container to variable
    var runCount = 0;

    //reload function
    reload.addEventListener('click', function () {

        colorContainer.innerHTML = "";

        for (var i = 0; i < numberOfColors; i++) {

            var newFlatColor = new flatColor(); //call color function to return color
            var newColor = document.createElement('li'); //create li element for color
            newColor.className = 'cell'; //assign class to li element
            var colorHex = document.createElement('p'); //create p element for inner hex number
            colorHex.className = 'color-hex'; //assign class to p element
            colorHex.innerText = newFlatColor.hex; //add hex to element
            newColor.appendChild(colorHex); //append hex to box color           
            console.log(newFlatColor.hex); //console log color
            newColor.style.backgroundColor = newFlatColor.hex; //assign color to background of current element
            colorContainer.appendChild(newColor); //append color to container
            newColor.addEventListener('mouseenter', function () {
                colorHex.style.display = "block";
            });
            newColor.addEventListener('mouseleave', function () {
                colorHex.style.display = "none";
            });
            if (runCount == 0) {
                reload.innerText = "";
                reload.innerText = 'Refresh Colors';
            }
            runCount++;
        }
    });

    // *** This code was provided by @mariamrf at https://github.com/mariamrf/flat-color-generator **//

    var flatColor = function(h){
        var PHI = 0.618033988749895; 
        var s, v;
        var hue;
        if(h===undefined){
            hue = (Math.floor(Math.random()*(360 - 0 + 1)+0))/360;
            h = ( hue + ( hue / PHI )) % 360; 
        } 
        else h/=360;                                           
        v = Math.floor(Math.random() * (100 - 20 + 1) + 20);
        s = (v-10)/100;
        v = v/100;
    
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
            r = Math.round(r * 255);
            g = Math.round(g * 255);
            b = Math.round(b * 255);
    
        var finalColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    
        this.h = h;
        this.s = s;
        this.v = v;
        this.r = r;
        this.g = g;
        this.b = b;
        this.hex = finalColor;
    
    }
    
});
