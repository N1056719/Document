// 設定圖片輪播的索引值
var imageIndex = 0;
// 設定圖片輪播最大數，超過這個數值將從第一張重複
var maxImageCount = 5;
// 頁面第一次載入時的處理程序
function formLoad() {
	// 載入字串處理動態函式庫
	var jsFile = document.
	createElement("script");
	jsFile.setAttribute("type", "text/javascript");
	jsFile.setAttribute("src", "../Scripts/StringLibrary.js");
	document.getElementsByTagName("head")[0].appendChild(jsFile)
	// 處理標題圖片輪播，一開始給予預設圖片
	$('#headImage').attr('src', '../Images/Header01.jpg');
	$('#headImage').attr('width', '1260px');
	$('#headImage').attr('height', '120px');
	// 設定更換圖片的頻率
	var intervalSec = 3 ;
	var changeTitleImage = setInterval(function () { changeImage(); }, parseInt(intervalSec)*1000);
	// 取出每一個 Input 物件
	$('input[type=image]').each(function () {
		// 取得按鈕 ID 最後一個數字字元
		var idNum = this.id.substring(this.id.length - 8);
		console.log(idNum);
		// 經過計算後決定要開啟的圖片
		var imageFileName = '../Images/' + idNum + '11.jpg';
		console.log(imageFileName);
		// 取出物件的 ID，組成 JQuery 的物件
		var idName = '#' + this.id;
		$(idName).attr('src', imageFileName);
		// 加入事件處理程序
		// 加入 OnClick 的事件處理程序
		$(idName).click(summit);
		// 加入 滑鼠移入與移出 的事件處理程序
		$(idName).hover(mouseEnter, mouseExit);
	})
	// 版權宣告
	$('#copyRight').attr('src', '../Images/copyright.jpg');
	$('#copyRight').attr('width', '1260px');
	$('#copyRight').attr('height', '60px');}
// 滑鼠移到圖片上時的的處理程序
function mouseEnter() {
	// 取得按鈕 ID 最後一個數字字元
	var idNum = event.target.id.substring(event.target.id.length - 8);
	console.log(idNum);
	// 經過計算後決定要開啟的圖片
	var imageFileName = '../Images/' + idNum + '12.jpg';
	// 取得呼叫此程序的按鈕 ID
	var idName = '#' + event.target.id;
	// 透過 JQuery 變更圖片
	console.log('id:' + event.target.id + ' file:' + imageFileName);
	$(idName).attr('src', imageFileName);
}
// 滑鼠離開圖片時的處理程序
function mouseExit() {
	// 取得按鈕 ID 最後一個數字字元
	var idNum = event.target.id.substring(event.target.id.length - 8);
	console.log(idNum);
	// 經過計算後決定要開啟的圖片
	var imageFileName = '../Images/' + idNum + '11.jpg';
	// 取得呼叫此程序的按鈕 ID
	var idName = '#' + event.target.id;
	// 透過 JQuery 變更圖片
	console.log('id:' + event.target.id + ' file:' + imageFileName);
	$(idName).attr('src', imageFileName);
}
// 處理標題圖片輪播
function changeImage() {
	// 檢查圖片索引是否已達最大值
	if (parseInt(imageIndex) >= parseInt(maxImageCount)) {
		// 從第一張圖片開始播放
		imageIndex = 1;
	}
	else {
		imageIndex = parseInt(imageIndex) + 1;
	}
	// 經過計算後決定要開啟的圖片
	var imageFileName = '../Images/Header' + padLeft(imageIndex,2) + '.jpg';
	console.log(imageFileName) ;
	// 開始更換圖片
	$('#headImage').attr('src', imageFileName);
}
