const myButtonClick = document.getElementById("myButton");
const pcInfoButton = document.getElementById('pcInfoButton');
//elemtnet selctor vair
const divBodyElement = document.getElementById('wholeBody')
const bodyElement = document.getElementById('htmlBody')
const uK = document.getElementById('Location');
const h1Color = document.querySelector('h1');
const pcInfoH1Selector = document.getElementById('pcInfoH1');
const allElements = document.querySelector('*');
//button variables PC's
//button variables COLORS
const redPageButton = document.getElementById('redButton');
const greenPageButton = document.getElementById('greenButton');
const bluePageButton = document.getElementById('blueButton');
const purplePageButton = document.getElementById('purpleButton');
//const haloPageButton = document.getElementById('HALLOHALOButton');

const pinkPageButton = document.getElementById('pinkButton');
const halloween = document.getElementById('halloween');
const countAll = document.querySelectorAll('*');
const htmlBOd = document.getElementById('htmlBody');
//const backGround = do
let changeLightBlueAll = document.querySelectorAll('*');
let pcInfoTwo = "";


function three (){
  uK.size(100);
  uK.style.color('#FFF');
  h1Color.style.color = "red";
}

myButtonClick.addEventListener("click", function() {
  // Your JavaScript code to run on click goes here
  h1Color.style.color = "red";
  //three();
  uK.style.color = "blue";
  //alert("Button clicked!");
  console.log("The button was clicked!");
});
let count = 1;
//pc info function to display pc info
pcInfoButton.addEventListener("click", function (){
  if (count % 2 === 1 ){
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        pcInfoTwo = "<br>Battery Level: " + battery.level + "% Out of 100%" +
        "<br>Battery Charging: " + battery.charging;
        battery.addEventListener("chargingchange", () => {
          pcInfoTwo += "<br>Battery Charging Status Changed: " + battery.charging;
        });
      });
    } else {
      pcInfoTwo += "<br>Battery Status API not supported.";
    }
    //pcInfoTwo.innerHTML = pcInfoTwo.textContent;

    pcInfoH1Selector.textContent = "Screen Width: " + screen.width +
      "<br>Screen Height: " + screen.height  +
      "<br>Available Screen Width: " + screen.availWidth +
      "<br>Available Screen Height: " + screen.availHeight + "\n" +
      "<br>Color Depth: " + screen.colorDepth + "\n" +
      "<br>Pixel Depth: " + screen.pixelDepth +
      "<br>Device Memory (GB):" + navigator.deviceMemory + // May not be precise
      "<br>Hardware Concurrency (CPU Cores):" + navigator.hardwareConcurrency + pcInfoTwo + "<br>Count: " + count + "<br>Count % 2 = "+ count % 2;

    pcInfoH1Selector.innerHTML = pcInfoH1Selector.textContent;// + pcInfoTwo.textContent;

  }  else {
    pcInfoH1Selector.textContent = "";
  }
  count++;
});

redPageButton.addEventListener("click", function(){
  resetAll()
  blackBackground()
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "red";
  h1Color.style.color = "red";
  uK.style.color = "red";

});
greenPageButton.addEventListener("click", function(){
  resetAll()
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "green";
  h1Color.style.color = "green";
  uK.style.color = "green";

});
bluePageButton.addEventListener("click", function(){
  resetAll()
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "blue";
  h1Color.style.color = "blue";
  uK.style.color = "blue";
  //allElements.style.webkitTextStroke = "0.40px yellow";


})
purplePageButton.addEventListener("click", function(){
  resetAll()
  blackBackground()
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "purple";
  h1Color.style.color = "purple";
  uK.style.color = "purple";


})/*
haloPageButton.addEventListener("click", function(){
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "black";
  h1Color.style.color = "black";
  uK.style.color = "black";

})*/
pinkPageButton.addEventListener("click", function(){
  resetAll()
  blackBackground()
  allElements.style.webkitTextStroke = "";
  allElements.style.color = "pink";
  h1Color.style.color = "pink";
  uK.style.color = "pink";

})

halloween.addEventListener("click", function(){
  bodyElement.style.backgroundColor = "black";
  allElements.style.color = "black";
  h1Color.style.color = "black";
  uK.style.color = "black";
  allElements.style.webkitTextStroke = ".5" +
    "px orange";
  bodyElement.style.backgroundImage = "url('../img/Buttons/halloweenButtonClip.jpg')";
  divBodyElement.style.backgroundImage = ""
  /*htmlBOd.style.webkitTextStroke = "2px orange";
  htmlBOd.style.color = "black";

 // htmlBOd.style.backgroundColor = ""
  //htmlBOd.style.backgroundImage = "img/Buttons/halloweenButtonClip.jpg";
  //allElements.style.backgroundImage = "../img/Buttons/halloweenButtonClip.jpg";
*/

})

function blackBackground(){
  bodyElement.style.backgroundColor = "black";
  bodyElement.style.backgroundImage = 'none';


}

function resetAll(){

  bodyElement.style.backgroundColor = "black";
  bodyElement.style.backgroundImage = "url('../img/Vlad.jpg')"

}

//const testButton/*
/*
for (var i = 0; changeLightBlueAll < 5; i++) {

  if (changeLightBlueAll.color === "blue") {
    changeLightBlueAll.color = "red"
  }

}
*/
