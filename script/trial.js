function Subm(e){
    // e.preventDefault();
    let a = document.getElementById("U-name").value;
    let b = document.getElementById("P-word").value;

    if (a=="Anony" & b=="wow"){
        // e.preventDefault(false);
        document.getElementById("Form-R").action = "success.html";
    }

    else{
        alert("Please Enter Valid ID/Password");
    }
}

document.getElementById("exampleColorInput").addEventListener("mouseenter", function(){
    const col = document.getElementById("exampleColorInput").value;
    document.getElementById("formFile").style = "background-color:" + col + ";"    
})

document.getElementById("exampleColorInput").addEventListener("mouseleave", function(){
    const col = document.getElementById("exampleColorInput").value;
    document.getElementById("formFile").style = "background-color:" + col + ";"    
})