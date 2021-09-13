var sentence = '';
var mondat = '';
var audio = new Audio('rick/Rick Astley - Never Gonna Give You Up (Video).mp3')

document.getElementById("answer").value = document.getElementById('question').value;
document.getElementById("válasz").value = document.getElementById('kérdés').value;
//m-t
$("#next").click(function() {
    if (document.getElementById('question').value == '.-') {
        sentence = 'a';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-...') {
        sentence = sentence + 'b';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-.-.') {
        sentence = sentence + 'c';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-..') {
        sentence = sentence + 'd';
        document.getElementById('question').value = '';
    }  else if (document.getElementById('question').value == '.') {
        sentence = sentence + 'e';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '..-.') {
        sentence = sentence + 'f';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--.') {
        sentence = sentence + 'g';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '....') {
        sentence = sentence + 'h';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '..') {
        sentence = sentence + 'i';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.---') {
        sentence = sentence + 'j';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-.-') {
        sentence = sentence + 'k';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.-..') {
        sentence = sentence + 'l';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--') {
        sentence = sentence + 'm';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-.') {
        sentence = sentence + 'n';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '---') {
        sentence = sentence + 'o';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.--.') {
        sentence = sentence + 'p';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--.-') {
        sentence = sentence + 'q';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.-.') {
        sentence = sentence + 'r';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '...') {
        sentence = sentence + 's';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-') {
        sentence = sentence + 't';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '..-') {
        sentence = sentence + 'u';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '...-') {
        sentence = sentence + 'v';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.--') {
        sentence = sentence + 'w';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-..-') {
        sentence = sentence + 'x';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-.--') {
        sentence = sentence + 'y';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--..') {
        sentence = sentence + 'z';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.--.-.') {
        sentence = sentence + '@';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.-...') {
        sentence = sentence + '&';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.----') {
        sentence = sentence + '1';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '..---') {
        sentence = sentence + '2';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '...--') {
        sentence = sentence + '3';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '....-') {
        sentence = sentence + '4';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.....') {
        sentence = sentence + '5';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-....') {
        sentence = sentence + '6';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--...') {
        sentence = sentence + '7';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '---..') {
        sentence = sentence + '8';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '----.') {
        sentence = sentence + '9';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-.-.--') {
        sentence = sentence + '!';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '..--..') {
        sentence = sentence + '?';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '--..--') {
        sentence = sentence + ',';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '.-.-.-') {
        sentence = sentence + '.';
        document.getElementById('question').value = '';
    } else if (document.getElementById('question').value == '-----') {
        sentence = sentence + '0';
        document.getElementById('question').value = '';
    } else {
        console.log('Error');
    };
});

//t-m

$("#kövi").click(function() {
    if (document.getElementById('kérdés').value == 'a') {
        mondat = '.- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'b') {
        mondat = mondat + '-... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'c') {
        mondat = mondat + '-.-. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'd') {
        mondat = mondat + '-.. ';
        document.getElementById('kérdés').value = '';
    }  else if (document.getElementById('kérdés').value == 'e') {
        mondat = mondat + '. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'f') {
        mondat = mondat + '..-. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'g') {
        mondat = mondat + '--. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'h') {
        mondat = mondat + '.... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'i') {
        mondat = mondat + '.. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'j') {
        mondat = mondat + '.--- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'k') {
        mondat = mondat + '-.- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'l') {
        mondat = mondat + '.-.. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'm') {
        mondat = mondat + '-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'n') {
        mondat = mondat + '-. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'o') {
        mondat = mondat + '--- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'p') {
        mondat = mondat + '.--. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'q') {
        mondat = mondat + '--.- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'r') {
        mondat = mondat + '.-. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 's') {
        mondat = mondat + '... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 't') {
        mondat = mondat + '- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'u') {
        mondat = mondat + '..- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'v') {
        mondat = mondat + '...- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'w') {
        mondat = mondat + '.-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'x') {
        mondat = mondat + '-..- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'y') {
        mondat = mondat + '-.-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == 'z') {
        mondat = mondat + '--.. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '@') {
        mondat = mondat + '.--.-. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '&') {
        mondat = mondat + '.-... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '1') {
        mondat = mondat + '.---- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '2') {
        mondat = mondat + '..--- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '3') {
        mondat = mondat + '...-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '4') {
        mondat = mondat + '....- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '5') {
        mondat = mondat + '..... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '6') {
        mondat = mondat + '-.... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '7') {
        mondat = mondat + '--... ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '8') {
        mondat = mondat + '---.. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '9') {
        mondat = mondat + '----. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '!') {
        mondat = mondat + '-.-.-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '?') {
        mondat = mondat + '..--.. ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == ',') {
        mondat = mondat + '--..-- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '.') {
        mondat = mondat + '.-.-.- ';
        document.getElementById('kérdés').value = '';
    } else if (document.getElementById('kérdés').value == '0') {
        mondat = mondat + '----- ';
        document.getElementById('kérdés').value = '';
    } else {
        console.log('Error');
    };
});
//m-t
$('#done').click(function() {
    if (document.getElementById('question').value == '.-...-.-.-.-.-.---.-...-..') {
        audio.play();
    } else {
        document.getElementById("answer").value = sentence;
    }
})
//t-m
$('#kész').click(function() {
    if(document.getElementById('kérdés').value == 'rickroll') {
        audio.play();
    } else {
        document.getElementById("válasz").value = mondat;  
    }
})
//m-t
$('#again').click(function() {
    document.getElementById("answer").value = '';
    sentence = '';
    document.getElementById("question").value = '';
    audio.pause();
})
//t-m
$('#újra').click(function() {
    document.getElementById("válasz").value = '';
    mondat = '';
    audio.pause();
    document.getElementById("kérdés").value = '';
})



