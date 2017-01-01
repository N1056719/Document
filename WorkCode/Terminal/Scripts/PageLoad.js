// 頁面第一次載入時的處理程序
function formLoad() {
	// 取出每一個 Input 物件
	$('input[type=image]').each(function () {
		// 取出物件的 ID，組成 JQuery 的物件
		var idName = '#' + this.id;
		// 加入 OnClick 的事件處理程序
		$(idName).on('click', summit);
		// 加入 滑鼠移入與移出 的事件處理程序
		$(idName).hover(mouseEnter, mouseExit);
		// 取得按鈕 ID 最後一個數字字元
		var idNum = this.id.substring(this.id.length - 8);
		console.log(idNum);
		// 經過計算後決定要開啟的圖片
		var imageFileName = '../Images/' + idNum + '11.jpg';
		$(idName).attr('src', imageFileName);
		$(idName).attr('width', '1260px');
		$(idName).attr('height', '60px');
	})
	// 版權宣告
	$('#copyRight').attr('src', '../Images/copyright.jpg');
}
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
