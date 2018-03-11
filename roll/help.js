var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function Help() {
	rply = {
		"type": "template",
		"altText": "巴波擲骰Bot",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "偵探",
					"text": "請不要隨意點選其他職業的技能",
					"actions": [
						{
							"type": "message",
							"label": "偵探放大鏡",
							"text": "ccb 20 偵探放大鏡"
						},
						{
							"type": "message",
							"label": "尋寶地圖",
							"text": "ccb 40 尋寶地圖"
						}

					]
				}, {
					"title": "工匠",
					"text": "請不要隨意點選其他職業的技能",
					"actions": [
						{
							"type": "message",
							"label": "細緻零件",
							"text": "ccb 80 細緻零件"
						},
						{
							"type": "message",
							"label": "精密大錘",
							"text": "ccb 35 精密大錘"
						}

					]
				},
				{
					"title": "織布師",
					"text": "請不要隨意點選其他職業的技能",
					"actions": [
						{
							"type": "message",
							"label": "夏威夷襯衫",
							"text": "ccb 25 夏威夷襯衫"
						},
						{
							"type": "message",
							"label": "夏日藍衣",
							"text": "."
						}
						
					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Help: Help
};
