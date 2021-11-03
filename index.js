// *************************Menu de Navegación**********************
document.addEventListener("scroll",function(){
scrol()
})
let scrollTop=window.pageYOffset;
function scrol(){
    let scrollAct=window.pageYOffset;
    if(scrollTop<scrollAct){
        // document.querySelector(".main").style.top="-200px";
        document.querySelector(".main").style.height="0px";
        document.querySelector(".main").style.overflow="hidden";
        document.querySelector(".main").style.padding="0px";


    }else{
        // document.querySelector(".main").style.top="0px";
        document.querySelector(".main").style.height="100px";
        // document.querySelector(".main").style.overflow="visible";


    }
    scrollTop=scrollAct
}

// ******************************Mostrar menu en pantalla pequeña**************************
let bars=document.querySelector(".bars");
let cerrar=document.querySelector(".cerrar");

bars.addEventListener("click",function(){
    document.querySelector(".ul").classList.toggle("ver_ul");
    bars.style.display="none";
    document.querySelector(".car").style.display="none"
})
cerrar.addEventListener("click",function(){
    document.querySelector(".ul").classList.toggle("ver_ul");
    bars.style.display="block";
    document.querySelector(".car").style.display="block"  
})