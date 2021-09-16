var A = new Audio('../trainer sounds/Morse Code Alphabet A Alpha.mp3')
var B = new Audio('../trainer sounds/Morse Code Alphabet B Bravo.mp3')
var C = new Audio('../trainer sounds/Morse Code Alphabet C Charlie.mp3')
var D = new Audio('../trainer sounds/Morse Code Alphabet D Delta.mp3')
var E = new Audio('../trainer sounds/Morse Code Alphabet E Echo.mp3')
var F = new Audio('../trainer sounds/Morse Code Alphabet F Foxtrot.mp3')
var G = new Audio('../trainer sounds/Morse Code Alphabet G Golf.mp3')
var H = new Audio('../trainer sounds/Morse Code Alphabet H Hotel.mp3')
var I = new Audio('../trainer sounds/Morse Code Alphabet I India.mp3')
var J = new Audio('../trainer sounds/Morse Code Alphabet J Juliet.mp3')
var K = new Audio('../trainer sounds/Morse Code Alphabet K Kilo.mp3')
var L = new Audio('../trainer sounds/Morse Code Alphabet L Lima.mp3')
var M = new Audio('../trainer sounds/Morse Code Alphabet M Mike.mp3')
var N = new Audio('../trainer sounds/Morse Code Alphabet N November.mp3')
var O = new Audio('../trainer sounds/Morse Code Alphabet O Oscar.mp3')
var P = new Audio('../trainer sounds/Morse Code Alphabet P Papa.mp3')
var Q = new Audio('../trainer sounds/Morse Code Alphabet Q Quebec.mp3')
var R = new Audio('../trainer sounds/Morse Code Alphabet R Romeo.mp3')
var S = new Audio('../trainer sounds/Morse Code Alphabet S Sierra.mp3')
var T = new Audio('../trainer sounds/Morse Code Alphabet T Tango.mp3')
var U = new Audio('../trainer sounds/Morse Code Alphabet U Uniform.mp3')
var V = new Audio('../trainer sounds/Morse Code Alphabet V Victor.mp3')
var W = new Audio('../trainer sounds/Morse Code Alphabet W Whiskey.mp3')
var X = new Audio('../trainer sounds/Morse Code Alphabet X Xray.mp3')
var Y = new Audio('../trainer sounds/Morse Code Alphabet Y Yankee.mp3')
var Z = new Audio('../trainer sounds/Morse Code Alphabet Z Zulu.mp3')
var random = Math.floor(Math.random() * 25)


$("#start").click(function() {
    random = Math.floor(Math.random() * 25)
    document.getElementById('input').value = ''
    if (random == 0) {
        A.play()
    } else if (random == 1) {
        B.play()
    } else if (random == 2) {
        C.play()
    } else if (random == 3) {
        D.play()
    } else if (random == 4) {
        E.play()
    } else if (random == 5) {
        F.play()
    } else if (random == 6) {
        G.play()
    } else if (random == 7) {
        H.play()
    } else if (random == 8) {
        I.play()
    } else if (random == 9) {
        J.play()
    } else if (random == 10) {
        K.play()
    } else if (random == 11) {
        L.play()
    } else if (random == 12) {
        M.play()
    } else if (random == 13) {
        N.play()
    } else if (random == 14) {
        O.play()
    } else if (random == 15) {
        P.play()
    } else if (random == 16) {
        Q.play()
    } else if (random == 17) {
        R.play()
    } else if (random == 18) {
        S.play()
    } else if (random == 19) {
        T.play()
    } else if (random == 20) {
        U.play()
    } else if (random == 21) {
        V.play()
    } else if (random == 22) {
        W.play()
    } else if (random == 23) {
        X.play()
    } else if (random == 24) {
        Y.play()
    } else if (random == 25) {
        Z.play()
    } else {
        console.log('Error')
    }
    $('h1').html('')
    $('h1').css('')
})

$("#done").click(function() {
    if (random == 0) {
        if (document.getElementById("input").value == 'a') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 1) {
        if (document.getElementById("input").value == 'b') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 2) {
        if (document.getElementById("input").value== 'c') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        }
    } else if (random == 3) {
        if (document.getElementById("input").value== 'd') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 4) {
        if (document.getElementById("input").value== 'e') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 5) {
        if (document.getElementById("input").value== 'f') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 6) {
        if (document.getElementById("input").value== 'g') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 7) {
        if (document.getElementById("input").value== 'h') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 8) {
        if (document.getElementById("input").value== 'i') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 9) {
        if (document.getElementById("input").value== 'j') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 10) {
        if (document.getElementById("input").value== 'k') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 11) {
        if (document.getElementById("input").value== 'l') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 12) {
        if (document.getElementById("input").value== 'm') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 13) {
        if (document.getElementById("input").value== 'n') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 14) {
        if (document.getElementById("input").value== 'o') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 15) {
        if (document.getElementById("input").value== 'p') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 16) {
        if (document.getElementById("input").value== 'q') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 17) {
        if (document.getElementById("input").value== 'r') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 18) {
        if (document.getElementById("input").value== 's') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 19) {
        if (document.getElementById("input").value== 't') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 20) {
        if (document.getElementById("input").value== 'u') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 21) {
        if (document.getElementById("input").value== 'v') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 22) {
        if (document.getElementById("input").value== 'w') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 23) {
        if (document.getElementById("input").value== 'x') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 24) {
        if (document.getElementById("input").value== 'y') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    } else if (random == 25) {
        if (document.getElementById("input").value== 'z') {
            $("h1").html("Nice")
            $("h1").css("color", "green")
        } else {
            $("h1").html('Nem jó')
            $('h1').css('color', 'red')
        }
    }
})

$('#back').click(function() {
    window.location.href = "../index.html";
})