const vladimirFaceButton = document.getElementById('button2ID')
const vladimirParagraph = document.getElementById('vladimirParagraphID')

let vFaceCount = 0;
const tC = vladimirParagraph.textContent;

vladimirFaceButton.addEventListener("click", function() {

vFaceCount++;

if (vFaceCount % 2 === 1){
  vladimirParagraph.textContent = vFaceCount + "You have clicked on face, I have on click functionality : )"
} else{
  vladimirParagraph.textContent = tC;
}

});
