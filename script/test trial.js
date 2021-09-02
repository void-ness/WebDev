function test()
{for ( let i=7; i < 6; i++ ){
    console.log(i);
}}

function Work(){
    var a=0;
    function Img(){
        if (a==0){
            document.getElementById("image").style.width="60%";
            a=1;
        }
        else if (a==1){
            document.getElementById("image").style.width="80%";
            a=0;
        }
    }
    return Img
}
var b = Work();

document.getElementById("click").
addEventListener("click",b)

document.getElementById("sub1").addEventListener("click",function(){
    var a = document.getElementById("inp").value;    
    if (a=="hello") document.getElementById("form").action="success.html";
    
    else{
        alert("enter valid password");
    }
})

