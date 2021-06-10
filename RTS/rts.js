/*
#1 Print the number of integers in an array that are above
 the given input and the number that are below, 
 e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.
*/

function getValues1(){
    var value1 = document.getElementById("int1").value;
    var arr = document.getElementById("array").value;
    
    //filter string to array of ints
    var b = arr.split(',').map(function(elm) {
        return parseInt(elm, 10);
    });

    //get counter values for above and below
    var above = 0, below = 0;
    for(i = 0; i < b.length; i++){
        if(value1 > b[i]){
            below++;
        }
        else if(value1 < b[i]){
            above++;
        }
    }

    //create new div for the final values for 'above' and 'below'
    var div = document.createElement('div');
    div.id = 'result1';
    div.innerHTML = `above: ${above}, below: ${below}`;
    document.getElementById('result1').replaceWith(div)
}

/*
#2 Rotate the characters in a string by a given input
 and have the overflow appear at the beginning,
 e.g. “MyString” rotated by 2 is “ngMyStri”.
*/

function getValues2(){
    var value2 = parseInt(document.getElementById("int2").value);
    var str = document.getElementById("str").value;

    dq = str.split("");
    dq_ref = [...dq];

    for(i = 0; i < dq.length; i++){
        dq[(i+value2)%(dq.length)] = dq_ref[i]
    }

    var rotate = dq.join("")

    console.log(dq)
    var div = document.createElement('result2');
    div.id = 'result2';
    div.innerHTML = `Rotated string: ${rotate}`;
    document.getElementById('result2').replaceWith(div)
}

/**
 * #3 If you could change 1 thing about your favorite 
 * framework/language/platform (pick one), what would it be?
 */

/*I love Python due to the user friendly libraries, but I wish it was as fast as C/C++. 
If I could I would like Python to have 
the speed of a low level language.
*/