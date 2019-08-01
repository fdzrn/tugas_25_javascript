angka = [2,39,76,50,9,7,41,2,24,1,16];
console.log("Sebelumnya : " + angka);
sorting = angka.sort();
console.log("Ascending : " + sorting);
reverse = angka.reverse();
console.log("Descending : " + reverse);
filter = angka.filter(angka => {
	return angka > 10;
});
console.log("Filter > 10 : " +filter)