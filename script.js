console.log("connected to js");

function weatherReport() {
    alert("Loading Weather Report...");
}

function remove(elem){
    console.log("this is elem"+elem); 
    elem.parentNode.removeChild(elem);
}

function grabNewPic()
{
    document.getElementById("pic1").src = "images/succulents-2.jpg"
    
}
    function grabOldPic() 
{
    document.getElementById("pic1").src = "images/succulents-1.jpg"

}