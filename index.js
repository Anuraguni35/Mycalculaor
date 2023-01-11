let string="";
let btn=document.querySelectorAll('.btn');
let input=document.getElementById('input_Sec')
let show=document.getElementById('show');
let con_sec=document.getElementById('Second_container');

show.addEventListener("click",()=>{
    if(con_sec.style.display!="block"){
     con_sec.style.display="block";
     show.innerHTML=`Show less <i class="fa-solid fa-arrow-up">`
    }
    else{
        con_sec.style.display="none";
        show.innerHTML=`Show more <i class="fa-solid fa-arrow-down">`
    }
})

Array.from(btn).forEach((button)=>{
    
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            try{
             string=eval(string);
             input.value=string;
            }catch(err){
                console.log(err,"error")
                string="";
                input.value=string;
            }
         
        }
        else if(e.target.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="sqrt"){
            string=Math.sqrt(eval(string)); 
            input.value=string;
           
        }
        else if(e.target.innerHTML=="cbrt"){
            string=Math.cbrt(eval(string)); 
            input.value=string;
        }
        else if(e.target.innerHTML=="ℼ"){
            if(string!=""){
            string=Math.PI*(eval(string));
            }
            else{
                string=Math.PI;
            }
            input.value=string;
        }
        else if(e.target.innerHTML=="^2"){
            string=Math.pow((eval(string)),2); 
            input.value=string;
        }
        else if(e.target.innerHTML=="^3"){
            string=Math.pow((eval(string)),3); 
            input.value=string;
        }
        else if(e.target.innerHTML=="1/x"){
            string= 1/(eval(string)); 
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }
    })
    
})
