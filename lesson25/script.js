var str = '<a href="" class="eee" id="zzz">';
var res = str.match(/\s.*?(?=\=\")/g,'');
alert(res);