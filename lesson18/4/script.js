function dunc(elem){
	if (/jpeg$/.test(elem.value)) 
		alert('jpeg');
	else if (/jpg/.test(elem.value)) 
		alert('jpg');
	else alert('неизвестный фармат');
}
