let str = 'sss site.ru zzz site.com kkk';
let res = str.replace(/....\..../g, '<a href="http://$&">$&</a>');
alert(res);