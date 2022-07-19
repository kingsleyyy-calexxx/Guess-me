const submitButton=document.getElementById("checkButton");

console.log(submitButton);
var randomNumber=Math.round(Math.random()*100)
console.log(randomNumber);
var live=10;
var text;
// text.style.color=`white`;
// Must match the random number and input number.
submitButton.onclick=() =>{
    var inputValue=document.getElementById("textBox").value ;
    console.log(inputValue);
    live--; //Live decreases each time. So, --
    // Win condition
    if(inputValue==randomNumber){
        location.href='./win.html'
    }
    else if(live==0){
        location.href='./lose.html'
    }
    else if(inputValue>randomNumber){
        text=`Your guess is too.....high. ${live} remaining`;
        // text.style.size=`30px`;
    }
    else if (inputValue<randomNumber){
        text=`Your guess is too.....low. ${live} remaining`;
        // text.style.size=`30px`;
    }
// console.log(live);
// console.log(text);
message.style.display="inherit";
message.innerHTML=text;
lives.innerHTML=live;
}