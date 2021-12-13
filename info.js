function goToMap()
{
    document.location.href = "map.html";
} 

function nextTask2()
{
    document.location.href = "task3.html";
} 

function nextTask3()
{
    document.location.href = "task4.html";
} 

function nextTask4()
{
    document.location.href = "task5.html";
} 

function back()
{
    document.location.href = "final.html";
} 

    
function goToTeory()
{
    document.location.href = "teoria.html";
} 

function OOP()
{
    document.location.href = "OOP.html";
}

function rec()
{
    document.location.href = "rec.html";
}

function osnovi()
{
    document.location.href = "OsnoviPHP.html";
}

function teoria()
{
    document.location.href = "teoria.html";
}


function codeTest()
{
    document.location.href = "codeTest.html";
}

function againtestsButFalse()
{
    document.location.href = "task1.html";
}



function returntestsButFalse()
{
    document.location.href = "map.html";
}



function returntests()
{
    document.location.href = "map.html";
}


function next()
{
    document.location.href = "task2.html";
}



function task5()
{
    document.location.href = "task5.html";
}




function task4()
{
    document.location.href = "task4.html";
}





function task3()
{
    document.location.href = "task3.html";
}



function task2()
{
    document.location.href = "task2.html";
}


function quiz()
{
    document.location.href = "task1.html";
}

function start()
{
    document.location.href = "map.html";
}


function info()
{
    
    let block = document.createElement("div");
    block.style.width = "400px";
    block.style.height = "50px";
    block.style.backgroundColor = "white";
    block.style.borderRadius = "25px";
    block.id = "block";
    block.style.boxShadow = " 0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe";
    block.style.animationDuration = "3s";


    var text1 = document.createElement("label");
    text1.textContent = "1.Основи PHP";
    text1.style.marginLeft = "20px";
    text1.style.width = "auto";
    text1.style.height = "auto";
    text1.style.fontFamily = "cursive";

    var text2 = document.createElement("label");
    text2.textContent = "2.Змінні";
    text2.style.marginLeft = "20px";
    text2.style.width = "auto";
    text2.style.height = "auto";
    text2.style.fontFamily = "cursive";

    var text3 = document.createElement("label");
    text3.textContent = "3.Функції";
    text3.style.marginLeft = "20px";
    text3.style.width = "auto";
    text3.style.height = "auto";
    text3.style.fontFamily = "cursive";

    var text4 = document.createElement("label");
    text4.textContent = "4.Рекурсія";
    text4.style.marginLeft = "20px";
    text4.style.width = "auto";
    text4.style.height = "auto";
    text4.style.fontFamily = "cursive";

    var text5 = document.createElement("label");
    text5.textContent = "5.Массиви";
    text5.style.marginLeft = "20px";
    text5.style.width = "auto";
    text5.style.height = "auto";
    text5.style.fontFamily = "cursive";




    var br = document.createElement('br');
    

    

    document.getElementById("demo").appendChild(block);
    document.getElementById("block").appendChild(text1);
    document.getElementById("block").appendChild(br);
    document.getElementById("block").appendChild(text2);
    document.getElementById("block").appendChild(br);
    document.getElementById("block").appendChild(text3);
    document.getElementById("block").appendChild(br);
    document.getElementById("block").appendChild(text4);
    document.getElementById("block").appendChild(br);
    document.getElementById("block").appendChild(text5);

   
}
