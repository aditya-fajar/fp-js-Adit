function leapYear(y1, y2) {
	if (y2 == y1) {
        return 0;
    }

    if(y2 % 100 === 0 || y2 % 400 === 0 || y2 % 4 === 0){
    		console.log(y2 + " adalah tahun kabisat");
			return leapYear(y1,y2-1)
		}else{
			console.log(y2 + ' bukan tahun kabisat');
			return leapYear(y1,y2-1)
	}
}

leapYear(2000,2004)