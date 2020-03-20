function dunc(elem){
	if (/\D/.test(elem.value)) 
		alert('not number');
	else if(elem.value.length <=12 && elem.value.length >=1)
			alert('lenght str = '+elem.value.length);
		else alert('lenght str > 12');
}
