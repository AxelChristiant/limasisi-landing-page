

function setColorOfWord(chars,color){
  return chars.map(char =>`<span style="color: ${color}">${char}</span>`)
}
const texts = [
["T","h","e ",...setColorOfWord(["A","r","t"],"pink"),"!"],
["T","h","e ",...setColorOfWord(["C","r","e","a","t","i","v","i","t","y"],"green"),"!"],
["L","i","m","a",...setColorOfWord([" S","i","s","i"],"red"),"!"]];
let index = 0;
let charIndex = 0;
let reverseText = "";
const typingAnimation = document.getElementById("typingAnimation");
typingAnimation.innerHTML = "<span style='display:none'></span>"
let currText = ""
let i = 0;

addEventListener("scroll", (event) => {
  event.preventDefault()
  i += 1
  console.log(i)});

function type() {
  
  if (charIndex < texts[index].length) {
    // typingAnimation.innerHTML += texts[index].charAt(charIndex);
    currText += texts[index][charIndex]
    typingAnimation.innerHTML = currText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    currText = texts[index].slice(0,charIndex-1).join('');
    if(currText.length == 0){
      typingAnimation.innerHTML = "<span style='opacity:0'></span>";
    }else{
    typingAnimation.innerHTML = currText;}
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index++;
    if (index >= texts.length) {
      index = 0;
    }
    reverseText = "";
    setTimeout(type, 500);
  }
}

type();