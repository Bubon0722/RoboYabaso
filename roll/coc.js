var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// COC6
////////////////////////////////////////		
function coc6(chack,text){
	let temp = rollbase.Dice(100);
	if (text == null ) {
		if (temp == 100) rply.text = '判定：' + chack	+ ' ' + temp + '結果：發動失敗；';
		if (temp <= chack) rply.text = '判定：' + chack + ' '	+ temp + '結果：發動成功';
		else rply.text = '判定：' + chack	+ ' ' + temp + '結果：發動失敗' ;
	}
	else
	{
		if (temp == 100) rply.text = '判定：' + chack + ' ' + temp + '結果：發動失敗' + text;
		if (temp <= chack) rply.text = '判定：' + chack +	' ' + temp + '結果：發動成功' + text;
		else rply.text = '判定：' + chack	+ ' ' +	temp + '結果：發動失敗' + text;
	}
	return rply;
}	

////////////////////////////////////////
//////////////// COC7
////////////////////////////////////////

module.exports = {
	coc6: coc6,
	coc7: coc7,
	coc7chack: coc7chack,
	coc7bp: coc7bp,
	ArrMax: ArrMax,
	build7char: build7char,
	build6char: build6char,
	PcBG:PcBG
};
