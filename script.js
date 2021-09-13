var sentence = '';

document.getElementById("answer").value = document.getElementById('question').value;

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
    }
});

$('#done').click(function() {
    document.getElementById("answer").value = sentence;
})

$('#again').click(function() {
    document.getElementById("answer").value = '';
    sentence = '';
})