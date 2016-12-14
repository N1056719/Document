import java.util.Scanner;
/*
    學號：N1056719
    姓名：江漢龍
    指導老師：張隆君
*/
public class Degree {
    /*
        依照使用者輸入要換算為華氏(F)還是攝氏(C)，進行溫度轉換，不分大小寫
        使用者輸入 F ，則將輸入的溫度轉為華氏
        使用者輸入 c ，則將輸入的溫度轉為攝氏
        其他輸入則視為錯誤
    */    
	public static void main(String[] args) {
        
		System.out.println("請決定您要轉換的是華氏(F)還是攝氏(C)");
        Scanner tempKind = new Scanner(System.String);
		if (tempKind.toUpperCase().equals("F"))
        {
            // 華氏，接收 user 輸入的溫度
            System.out.println("請輸入溫度");        
		    Scanner inputTemp = new Scanner(System.in);
		    String tempC = inputTemp.next();
		    int c = Integer.parseInt(tempC);
		    // 轉成華氏
            int f = c * 9 / 5 + 32;
		    System.out.println("您所輸入的溫度:" + tempC);
		    System.out.println("華氏溫度:" + f);
        }
        else if (tempKind.toUpperCase().equals("C"))
        {
            // 攝氏，接收 user 輸入的溫度
            System.out.println("請輸入溫度");        
		    Scanner inputTemp = new Scanner(System.in);
		    String tempF = inputTemp.next();
		    int f = Integer.parseInt(tempF);
		    // 轉成攝氏
            int c = (f-32)*5/9 ;
		    System.out.println("您所輸入的溫度:" + tempF);
		    System.out.println("攝氏溫度:" + c);
        }
        else
        {
            // 輸入錯誤
            System.out.println("輸入錯誤，請再試一次");        
        }
	}

}
