let ModeBtn=document.querySelector("#mode");
let CurrMode="light";

ModeBtn.addEventListener("click",()=> {
    if(CurrMode==="light"){
        CurrMode="dark";
        document.querySelector("body").style.backgroundColor="rgb(229, 248, 179)";
    }
    else{
        CurrMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(CurrMode);
});
function select1(){
     document.querySelector("body").style.fontFamily="Noto Sans", serif;
}
function select2(){
    document.querySelector("body").style.fontFamily="Noto Sans Devanagari", serif;
}
function myBlock(){
    alert('Dear Valued Customer, We invite you to visit MAHABIR JEWELLERY to explore a wide range of exquisite Silver/Gold jewellery and stunning designs crafted to perfection. Let us help you find the perfect piece that complements your style and celebrates your special moments.We look forward to welcoming you soon!');
}
function myBlock6(){
    alert('Delivery not available right now!');
}
function myGold(){
    alert('Visit MAHABIR JEWELLERY for Gold jewellery and Designs');
}