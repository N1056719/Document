/*
  處理新聞輪播的函式庫
*/
// 紀錄下載新聞的陣列
var feedNewsArray = []; 
// 依照前端傳入的物件，進行 ID 的轉換
var newsListID ;
// 依照前端傳入的物件，決定訂閱的新聞頻道
var newsURL ;
function processRSSNews() {
	alert('hello') ;
	if ($('#page02List') != null )
	{
		// 瘋影音
		newsListID = '#page02List' ;
		newsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fstars.udn.com%2Frss%2Fnews%2F1022%2F10090';
	}	
	if ($('#page03List') != null )
	{
		// 學習資源
		newsListID = '#page03List' ;
		newsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fudn.com%2Frssfeed%2Fnews%2F1012%2F8629%3Fch%3Dnews';
	}	
	if ($('#page04List') != null )
	{
		// 相簿
		newsListID = '#page04List' ;
		newsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fudn.com%2Frssfeed%2Fnews%2F2%2F6641%2F7322%3Fch%3Dnews';
	}	
	if ($('#page05List') != null )
	{
		// 行事曆
		// https://udn.com/rssfeed/news/1012/6878/6925?ch=news
		newsListID = '#page05List' ;
		newsURL = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fudn.com%2Frssfeed%2Fnews%2F1012%2F6878%2F6925%3Fch%3Dnews';
	}	
	if ($('#page06List') != null )
	{
		// 我的書房
		// https://udn.com/rssfeed/news/1012/6880/6947?ch=news
		newsListID = '#page06List' ;
		newsURL = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fudn.com%2Frssfeed%2Fnews%2F2%2F6641%2F7322%3Fch%3Dnews';
	}	
	if ($('#page07List') != null )
	{
		// 投資理財
		// https://udn.com/rssfeed/news/2/6645/7250?ch=news
		newsListID = '#page07List' ;
		newsURL = ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fudn.com%2Frssfeed%2Fnews%2F2%2F6641%2F7322%3Fch%3Dnews';
	}	
	// 如果前端有準備要接收新聞的 list 則開始進行新聞頻道的下載
	if (newsListID != null)
	{
		// 將陣列的值清空
		feedNewsArray = [] ;
		// 取得 JSON 的物件
		$.getJSON(newsURL, function (data) {
			// 逐條新聞解讀
			$.each(data.items, function (property, value) {
				// 將下載的新聞放到陣列中
				feedNewsArray.push(value.title); 
			}
			); 
		}); 
	}

}
// 紀錄目前已經取用到的新聞陣列索引值
var feedNewsCount = 0;
// 紀錄新聞輪播的 Page 計數器的值
var pageCount = parseInt(feedNewsCount) ;
// 處理新聞的輪播
function changeNewsTitle() {
	// 將畫面的 list 全部清除
	$(newsListID).empty() ;
	// 決定要顯示新聞的列數
	var newsDisplayCount = 5;
	// 將下載的新聞放從陣列的計數器的起始值設定為 pageCount 的值，這樣就有換頁的效果
	feedNewsCount = pageCount ;
	// 取得新聞陣列目前的值
	for (i = 1; i <= newsDisplayCount; i++) {
    	 // 判斷若已經達到陣列的最大值，則從零開始
		if (feedNewsCount == feedNewsArray.length)
			feedNewsCount = 0; 
		// 將下載的新聞放從陣列中取出後加入到畫面的 list 中
		var li = $('<li></li>').text(feedNewsArray[feedNewsCount]); 
		// 不斷累加陣列索引值得計數器
		feedNewsCount = parseInt(feedNewsCount) + 1; 
		// 設定 bootstrip 的 style
		li.addClass('list-group-item');
		//li.attr('href','http://www.ruten.com.tw') ; 
		// 將下載的新聞放從陣列中取出後加入到畫面的 list 中
		$(newsListID).append(li); 	
	}
	// 在迴圈結束後，將 pageCount 累加，若已經到達陣列的最大值則進行歸零
	if (pageCount == feedNewsArray.length)
		pageCount = 0;
	else
		pageCount = parseInt(pageCount) + 1;
	
}
