function enter(){
    var name2 =document.getElementById("inp2").value;
    var name =document.getElementById("inp").value;
    var message="Sorry You are Wrong Dear!!!!     "+ name +" alla potty (Ammunte kutty aanu) potty   &  "+ name2 +" alla patty (Ammu) aanu patty!!!!";
    if (name==="Ammunte kutty" && name2==="Ammu"){
        document.getElementById("content").innerHTML="Correct Answer......Your r Brilliant";
    }else {
        document.getElementById("content").innerHTML=message;
    }
    
}
