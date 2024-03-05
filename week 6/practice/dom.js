const myp1=document.getElementById("p1")
//alert(myp1.innerText);
myp1.style.color="red";
myp1.innerText = "i am over the moon";
const myb1=document.getElementById("b1")
myb1.innerText=" pressMe";
myb1.style.color="blue";
function sayhi(){
    alert(myb1.innerText="alert");
    myb1.innerText="pressed";
}
myb1.onclick= sayhi;