

//change button backgroundColor
const backgc=document.querySelector(".bulb-on");
const backgcn=document.querySelector(".bulb-off");
const hello=document.querySelector(".hello");
const h1=document.getElementById("h1");
const main=document.querySelector(".main");
const off=document.querySelector(".bulbon-off");
//bulb on 
function bulbon()
{
    let onbulb=document.querySelector(".bulbimg")
    onbulb.setAttribute('src','../images/buld-on.jpeg');
    backgc.style.backgroundColor="red";
    backgcn.style.backgroundColor="green";
    off.style.backgroundColor=" rgb(111, 111, 8)";
    
    const cb=document.createElement('li');
    cb.textContent="चालू ";
    cb.style.color="#fff";
     main.replaceChild(cb,main.firstElementChild)

}

//bulb off
function bulboff()
{
    let onbulb=document.querySelector(".bulbimg")
    onbulb.setAttribute('src','../images/bulb-off.jpeg');
    backgcn.style.backgroundColor="red";
    backgc.style.backgroundColor="green";

    off.style.backgroundColor="black";
    const cb=document.createElement('li');
    cb.textContent="बंद";
       cb.style.color="#fff";
     main.replaceChild(cb,main.firstElementChild)
}