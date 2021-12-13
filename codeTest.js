function test()
{
    let file = new FileReader();
file.onload("C:\OpenServer\domains\localhost\code.txt");
let code = document.getElementById("code");
code.value;
 if(code.value == "1")
     
 { 
     alert(file);
 }
 else
 {
     alert("BAD")
 }


}