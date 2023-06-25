// var name = window.prompt("Enter the tempeture")

// document.getElementById("2").onclick= function()
// {
//     let m = document.getElementById("text").value
//     document.write("temperature is", m)
// }

let tex1 = document.getElementById('text');
let tex2 = document.getElementById('t');
let tex3 = document.getElementById('re');

     tex1.oninput =function (){
        
        let d = ((tex1.value*1.8) + 32);
        tex2.value = d;
        let c = ((tex1.value*1) + 273.15 );
        tex3.value = c; 
     }
     tex2.oninput = function(){
        let p = (tex2.value - 32)/1.8;
        tex1.value =p;
        let q = ((tex2.value - 32)/1.8) + 273.15;
        tex3.value =q;
     }
     tex3.oninput = function(){
        let y = tex3.value - 273.15;
        tex1.value =y;
        let z= (tex3.value - 273.15)*1.8 +32;
        tex2.value =z;
     }
    //  function rem(){

    //     let p = (tex2.value - 32)/1.8;
    //     tex1.value =p;
    //     let q = ((tex2.value - 32)/1.8) + 273.15;
    //     tex3.value =q;
        
    //  }

    //  aero.addEventListener('click', tem);
    //  aero.addEventListener('click', rem);
     
// function tem(c){
//     return (c*95) +32;
// }

// d =tem();
// console.log(d)