let dm=true;
function toggle(){
    if(dm == true){
        document.body.style.background="white";
        document.body.style.color="black";
        dm=false;
    }
    else{
        document.body.style.background="black";
         document.body.style.color="white";
        dm=true;
    }
}