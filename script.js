function postData(path){

 
 document.getElementById("form").action = path;
 document.getElementById("form").submit();
}

postData("http://localhost:8080/F_G_Uebung_Service/test2")