module.exports = function main(str) {
	var str_1 = "", str_2 = "", str_3 = "";

	for(var i = 0; i < str.length; i++) {

		if(str[i] == "0"){
			str_1 = str_1 + "._."; str_2 = str_2 + "|.|"; str_3 = str_3 + "|_|";
		}else if(str[i] == "1") {
			str_1 = str_1 + "..."; str_2 = str_2 + "..|"; str_3 = str_3 + "..|";
		}else if(str[i] == "2") {
			str_1 = str_1 + "._."; str_2 = str_2 + "._|"; str_3 = str_3 + "|_.";
		}else if(str[i] == "3") {
			str_1 = str_1 + "._."; str_2 = str_2 + "._|"; str_3	= str_3 + "._|";	
		}else if(str[i] == "4") {
			str_1 = str_1 + "..."; str_2 = str_2 + "|_|"; str_3 = str_3 + "..|";
		}else if(str[i] == "5") {
			str_1 = str_1 + "._."; str_2 = str_2 + "|_."; str_3 = str_3 + "._|";
		}else if(str[i] == "6") {
			str_1 = str_1 + "._."; str_2 = str_2 + "|_."; str_3 = str_3 + "|_|";
		}else if(str[i] == "7") {
			str_1 = str_1 + "._."; str_2 = str_2 + "..|"; str_3 = str_3 + "..|";
		}else if(str[i] == "8") {
			str_1 = str_1 + "._."; str_2 = str_2 + "|_|"; str_3 = str_3 + "|_|";
		}else if(str[i] == "9") {
			str_1 = str_1 + "._."; str_2 = str_2 + "|_|"; str_3 = str_3 + "..|";
		}else{
			break;
		}

		if(i != str.length - 1) {
			str_1 = str_1 + " "; str_2 = str_2 +" "; str_3 = str_3 +" ";	
		}
	}	


    var strs = str_1 + "\n" + str_2 + "\n" + str_3 + "\n";
    console.log(strs)
	return strs;
};