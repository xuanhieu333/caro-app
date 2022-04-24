 function init() {
    var square1, square2, square3, square4, square5, square6, square7, square8, square9;
    square1 = document.getElementById("square1").value;
    square2 = document.getElementById("square2").value;
    square3 = document.getElementById("square3").value;
    square4 = document.getElementById("square4").value;
    square5 = document.getElementById("square5").value;
    square6 = document.getElementById("square6").value;
    square7 = document.getElementById("square7").value;
    square8 = document.getElementById("square8").value;
    square9 = document.getElementById("square9").value;

    if ((square1 == 'X') && (square2 == 'X') && (square3 == 'X')) {
        document.getElementById('root').innerHTML = "X thắng";
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('X thắng');
    }
    else if ((square1 == 'X') && (square4 == 'X') && (square7 == 'x' || square7 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;

        window.alert('X thắng');
    }
    else if ((square7 == 'X') && (square8 == 'X') && (square9 == 'x' || square9 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        window.alert('X thắng');
    }
    else if ((square3 == 'X') && (square6 == 'X') && (square9 == 'x' || square9 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        window.alert('X thắng');
    }
    else if ((square1 == 'X') && (square5 == 'X') && (square9 == 'x' || square9 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        window.alert('X thắng');
    }
    else if ((square3 == 'X') && (square5 == 'X') && (square7 == 'x' || square7 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('X thắng');
    }
    else if ((square2 == 'X') && (square5 == 'X') && (square8 == 'x' || square8 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('X thắng');
    }
    else if ((square4 == 'X') && (square5 == 'X') && (square6 == 'X')) {
        document.getElementById('root')
            .innerHTML = "X thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('X thắng');
    }


    else if ((square1 == '0' || square1 == '0') && (square2 == '0' || square2 == '0') && (square3 == '0' || square3 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square1 == '0' || square1 == '0') && (square4 == '0' || square4 == '0') && (square7 == '0' || square7 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square7 == '0' || square7 == '0') && (square8 == '0' || square8 == '0') && (square9 == '0' || square9 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square6").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square3 == '0' || square3 == '0') && (square6 == '0' || square6 == '0') && (square9 == '0' || square9 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square5").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square1 == '0' || square1 == '0') && (square5 == '0' || square5 == '0') && (square9 == '0' || square9 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square3 == '0' || square3 == '0') && (square5 == '0' || square5 == '0') && (square7 == '0' || square7 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square2 == '0' || square2 == '0') && (square5 == '0' || square5 == '0') && (square8 == '0' || square8 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square4").disabled = true;
        document.getElementById("square6").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('0 thắng');
    }
    else if ((square4 == '0' || square4 == '0') && (square5 == '0' || square5 == '0') && (square6 == '0' || square6 == '0')) {
        document.getElementById('root')
            .innerHTML = "0 thắng";
        document.getElementById("square1").disabled = true;
        document.getElementById("square2").disabled = true;
        document.getElementById("square3").disabled = true;
        document.getElementById("square7").disabled = true;
        document.getElementById("square8").disabled = true;
        document.getElementById("square9").disabled = true;
        window.alert('0 thắng');
    }

    else if ((square1 == 'X' || square1 == '0')
        && (square2 == 'X' || square2 == '0')
        && (square3 == 'X' || square3 == '0')
        && (square4 == 'X' || square4 == '0')
        && (square5 == 'X' || square5 == '0')
        && (square6 == 'X' || square6 == '0')
        && (square7 == 'X' || square7 == '0')
        && (square8 == 'X' || square8 == '0')
        && (square9 == 'X' || square9 == '0')) {
        document.getElementById('root')
            .innerHTML = "Hết cờ";
        alert('Hòa');
    }


    else {

        if (flag == 1) {
            document.getElementById('root').innerHTML = "Lượt X";
        }
        else {
            document.getElementById('root').innerHTML = "Lượt 0";
        }
    }
}

// RESET
function reset() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("square2").value = '';
    document.getElementById("square3").value = '';
    document.getElementById("square4").value = '';
    document.getElementById("square5").value = '';
    document.getElementById("square6").value = '';
    document.getElementById("square7").value = '';
    document.getElementById("square8").value = '';
    document.getElementById("square9").value = '';

}

// FLAG
flag = 1;
function check3() {
    if (flag == 1) {
        document.getElementById("square1").value = "X";
        document.getElementById("square1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square1").value = "0";
        document.getElementById("square1").disabled = true;
        flag = 1;
    }
}

function check4() {
    if (flag == 1) {
        document.getElementById("square2").value = "X";
        document.getElementById("square2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square2").value = "0";
        document.getElementById("square2").disabled = true;
        flag = 1;
    }
}

function check5() {
    if (flag == 1) {
        document.getElementById("square3").value = "X";
        document.getElementById("square3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square3").value = "0";
        document.getElementById("square3").disabled = true;
        flag = 1;
    }
}

function check6() {
    if (flag == 1) {
        document.getElementById("square4").value = "X";
        document.getElementById("square4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square4").value = "0";
        document.getElementById("square4").disabled = true;
        flag = 1;
    }
}

function check7() {
    if (flag == 1) {
        document.getElementById("square5").value = "X";
        document.getElementById("square5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square5").value = "0";
        document.getElementById("square5").disabled = true;
        flag = 1;
    }
}

function check8() {
    if (flag == 1) {
        document.getElementById("square6").value = "X";
        document.getElementById("square6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square6").value = "0";
        document.getElementById("square6").disabled = true;
        flag = 1;
    }
}

function check9() {
    if (flag == 1) {
        document.getElementById("square7").value = "X";
        document.getElementById("square7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square7").value = "0";
        document.getElementById("square7").disabled = true;
        flag = 1;
    }
}

function check10() {
    if (flag == 1) {
        document.getElementById("square8").value = "X";
        document.getElementById("square8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square8").value = "0";
        document.getElementById("square8").disabled = true;
        flag = 1;
    }
}

function check11() {
    if (flag == 1) {
        document.getElementById("square9").value = "X";
        document.getElementById("square9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("square9").value = "0";
        document.getElementById("square9").disabled = true;
        flag = 1;
    }
}
