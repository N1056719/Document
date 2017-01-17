/*
  字串處理函式庫
*/
/* 左邊補0 */
function padLeft(str, len) {
    str = '' + str;
    if (str.length >= len) {
        return str;
    } else {
        return padLeft("0" + str, len);
    }
}
 
/* 右邊補0 */
function padRight(str, len) {
    str = '' + str;
    if (str.length >= len) {
        return str;
    } else {
        return padRight(str + "0", len);
    }
}