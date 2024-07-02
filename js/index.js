function TiMu() {
	for (var i in data1) {
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);

		var beijing = document.createElement("div");
		beijing.className = "entrance-bottom-frame-beijing";
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(beijing);

		var div1 = document.createElement("div");
		div1.className = "entrance-bottom-frame-line-id";
		div1.innerHTML = data1[i].id;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div1);

		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);

		var code = document.createElement("code");
		var pre = document.createElement("pre");
		code.innerHTML = data1[i].code;
		pre.appendChild(code);
		pre.className = "pre_message"
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(pre);

		for (var j in data1[i].xuanxiang) {
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if (j == 0) {
				div3_id.innerHTML = "A";
			} else if (j == 1) {
				div3_id.innerHTML = "B";
			} else if (j == 2) {
				div3_id.innerHTML = "C";
			} else {
				div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
		}
	}

}

function addClass(obj, cls) {
	var obj_class = obj.className, //获取 class 内容.
		blank = (obj_class != '') ? ' ' : ''; //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
	added = obj_class + blank + cls; //组合原来的 class 和需要添加的 class.
	obj.className = added; //替换原来的 class.
}

function removeClass(obj, cls) {
	var obj_class = ' ' + obj.className + ' '; //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
	obj_class = obj_class.replace(/(\s+)/gi, ' '), //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
		removed = obj_class.replace(' ' + cls + ' ', ' '); //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
	removed = removed.replace(/(^\s+)|(\s+$)/g, ''); //去掉首尾空格. ex) 'bcd ' -> 'bcd'
	obj.className = removed; //替换原来的 class.
}

function hasClass(obj, cls) {
	var obj_class = obj.className, //获取 class 内容.
		obj_class_lst = obj_class.split(/\s+/); //通过split空字符将cls转换成数组.
	x = 0;
	for (x in obj_class_lst) {
		if (obj_class_lst[x] == cls) { //循环数组, 判断是否包含cls
			return true;
		}
	}
	return false;
}


function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return document.defaultView.getComputedStyle(obj, null)[attr];
	}
}

window.onload = function() {
	TiMu()
	mintime = 1;
	//  timer = setInterval("CountDown()", 1000); 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	for (var i = 0; i < document.querySelectorAll(".entrance-bottom-frame-line-button").length; i++) {
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function() {

			var selectedOption = this.querySelector(".entrance-bottom-frame-line-button-id").innerHTML;
			if (selectedOption === correctAnswers[timu_id]) {
				this.style.backgroundColor = "green";
				if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
					setTimeout(function() {
						var frame_left = getStyle(document.querySelector(".entrance-bottom-frame"),
							'marginLeft');
						document.querySelector(".entrance-bottom-frame").style.marginLeft = parseInt(
							frame_left) - 1050 + "px";
						timu_id++;
						addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id],
							active);
						removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id -
							1], active);
						addClass(document.querySelectorAll(".entrance-bottom-frame-beijing")[timu_id -
							1], none);
					}, 500); // 延时跳转，答对变绿
				} else {
					// alert("最后一题啦");
					history.back();
				}
			} else {
				this.style.backgroundColor = "red"; // 答错变红
			}
		}
	}
}

var correctAnswers = ['A', 'B', 'C', 'D', 'D'];

var data1 = [{
	"id": "1",
	"title": "",
	"code": "下列哪项是良渚文化的标志性出土文物？",
	"xuanxiang": [
		"玉器",
		"甲骨文",
		"瓷器",
		"青铜器",
	]

}, {
	"id": "2",
	"title": "",
	"code": "良渚文化以其精湛的手工业技术闻名，尤其是哪种技艺最为突出？",
	"xuanxiang": [
		"纺织技术",
		"制玉技术",
		"造船技术",
		"冶炼技术",
	]
}, {
	"id": "3",
	"title": "",
	"code": "良渚文化是中国哪个时期的重要考古发现？",
	"xuanxiang": [
		"唐朝",
		"商超",
		"新石器时代晚期",
		"春秋战国时期",
	]
}, {
	"id": "4",
	"title": "",
	"code": "良渚祖先使用什么工具切割玉器？",
	"xuanxiang": [
		"锯子",
		"刀剑",
		"木材",
		"砂岩和麻线",
	]
}, {
	"id": "5",
	"title": "",
	"code": "良渚文化主要分布在我国哪个省份的哪个地区？",
	"xuanxiang": [
		"河南省洛阳市",
		"陕西省西安市",
		"湖南省长沙市",
		"浙江省杭州市",
	],
}, 
];