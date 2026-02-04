

// Online Java Compiler
// Use this editor to write, compile and run your Java code onli
//
//
let content;
const contentArr = [3000];
let fileName = "stockOutputData.txt";
let buyPrice;
let stockSymbol;
let shares;
let initialPurchaseMoney;
let sellPrice;
let mras;
let count = 0;






/*

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Time;
import java.util.Locale;
import java.util.Scanner;


public class StockCalcVxLight {
  public static String content;
  public static String contentArr[] = new String[3000];
  public static String fileName = "stockOutputData.txt";
  private static double buyPrice;
  private static String stockSymbol;
  private static int shares;
  private static double initialPurchaseMoney;
  private static double sellPrice;
  private static double mras;
  public static int count = 0;

  public StockCalcVxLight(double buyPrice, String stockSymbol, double initialPurchaseMoney, double sellPrice, double mras){
  StockCalcVxLight.buyPrice = buyPrice;
  StockCalcVxLight.stockSymbol = stockSymbol;
  StockCalcVxLight.initialPurchaseMoney = initialPurchaseMoney;
  StockCalcVxLight.sellPrice = sellPrice;
  StockCalcVxLight.mras = mras;
}

static void printStockOutputData(String info){

  content = info;

  try {
    // Create a FileWriter to write to the file.
    // The 'true' argument in FileWriter constructor enables append mode.
    // If 'false' or omitted, the file will be overwritten.
    FileWriter fileWriter = new FileWriter(fileName, false);

    // Create a PrintWriter to write formatted text to the FileWriter.
    PrintWriter printWriter = new PrintWriter(fileWriter);

    // Write the content to the file
    printWriter.println(info);

    // It's crucial to close the PrintWriter to ensure all buffered data is written.
    printWriter.close();

    System.out.println("Content successfully written to " + fileName);

  } catch (IOException e) {
    System.err.println("An error occurred while writing to the file: " + e.getMessage());
    e.printStackTrace();
  }


}

public static double getBuyPrice(){
  Scanner scanner = new Scanner(System.in);
  System.out.println("What is the stock price: ");
  buyPrice = scanner.nextDouble();
  return buyPrice;
}

public static double getSellPrice(){
  Scanner scanner = new Scanner(System.in);
  System.out.println("What is the stock sell price: ");
  sellPrice = scanner.nextDouble();
  return sellPrice;
}

public static int getShares(){
  Scanner scanner = new Scanner(System.in);
  System.out.println("What is the amount of shares? ");
  shares = scanner.nextInt();
  return shares;
}

public static String getStockSymbol(){
  Scanner scanner = new Scanner(System.in);
  System.out.println("What is the stock symbol: ");
  stockSymbol = scanner.nextLine();
  return stockSymbol;
}

public static double getInitialPurchaseMoney(){
  Scanner scanner = new Scanner(System.in);
  System.out.println("How much money are you spending? ");
  initialPurchaseMoney = scanner.nextDouble();
  return initialPurchaseMoney;
}

public static double calculateProfit(double buyingPrice, double sellPrice, String stockSymbol, double initialPurchaseMoney){

  double shares =  initialPurchaseMoney / buyPrice;
  mras = shares * sellPrice;
  return mras - initialPurchaseMoney;
  //return ((initialPurchaseMoney * sellPrice) - (initialPurchaseMoney * buyingPrice));

}

public static void main(String[] args) {


  Messages messages = new Messages();
  System.out.println(messages);

  double bp = 0;//buyingprice
  double sp = 0; //sellprice
  double ip = 0;//initialpurchase money
  double mrs = 0;//moneyreceived after purchase
  double p = 0;//profit
  int s = 0;//shares no usage right now
  String ss = "";

  String bpS = "";//buyingprice
  String spS = ""; //sellprice
  String ipS = "";//initialpurchase money
  String mrsS = "";//moneyreceived after purchase
  String pS = "";//profit

  bp = getBuyPrice();
  sp = getSellPrice();
  ip = getInitialPurchaseMoney();
  ss = getStockSymbol();

  p = calculateProfit(bp,sp,ss,ip);

  StockCalcVxLight sc = new StockCalcVxLight(bp, ss, ip, sp, mrs);
  TimeMe tm = new TimeMe();

  //tm.displayTimeString();

  System.out.printf("\nBuy Price: %5.2f", bp);
  bpS = ("\nBuy Price: " + bp);
  System.out.printf("\nSell Price: %5.2f",sp);
  spS = ("\nSell Price: " + sp);
  System.out.printf("\nAmount Spent: %5.2f",ip);
  ipS = ("\nAmount Spent: " + ip);
  System.out.printf("\nStocksymbol: " + ss.toUpperCase());
  //ssS = ("\nStock Symbol: " + ss);
  System.out.printf("\nProfit: %5.2f", p);
  pS = ("\nProfit: " + p);

  System.out.printf("\n");

  content = bpS  + spS  + ipS + "\nStocksymbol " + ss +  pS;

  contentArr[count] = content;
  count++;
  for (int i = 0; i < count; i++) {
    printStockOutputData(contentArr[i]);

  }
}



}

*/
