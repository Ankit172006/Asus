

let string="";

let button=document.querySelectorAll(".button");
const hy=document.querySelector("#hy");

// function hello()
// {
//     hy.style.backgroundColor="blue";
//      console.log(button)
// }
Array.from(button).forEach((buttons)=>
{
   
   
    
    buttons.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            document.querySelector('input').value=string
        }
       
        else if(e.target.innerHTML == 'AC')
        {
            string="";
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML == 'enter')
        {
            string=eval(string);
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML == 'X')
        {
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
            console.log(string);
        }
        else
        {
        console.log(e.target);
        string = string+e.target.innerHTML;
        document.querySelector('input').value=string 
        }
    })
  
})
console.log(button)