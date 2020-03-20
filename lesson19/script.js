let str = 'a1b c34d x567z';
let res = str.match(/\d/g, '!');

var sum = 0;
for(var i = 0; i < res.length; i++){
    sum += parseInt(res[i]);
    }


alert(sum);