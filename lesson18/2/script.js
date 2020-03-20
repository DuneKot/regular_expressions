function dunc(elem){
	if (/https/.test(elem.value)) 
		alert('https');
	else if (/http/.test(elem.value)) 
		alert('http');
	else alert('Нет названия протокола');
}
