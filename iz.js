var miarray =new Array();
var btnAdd=document.getElementById("btnAdd");
var reset=document.getElementById("reset")
var items =document.getElementById("items");
var uns =document.getElementById("uns");
var borra =document.getElementById("borra");
var index =document.getElementById("btnIndex");
var splice =document.getElementById("splice");

var miarray =new Array();


splice.onclick=async()=>{
  const {value:pos} =await Swal.fire({
    title: "SPlICE",
    input: "text",
    inputLabel:"POSICION INICAL?",
    showCancelBitton:true,
    inputValidator: (value)=>{
      if (!value){
        return "Ingreda valor valido!";
      }
    }
  });
  
  const {value:n} =await Swal.fire({
    title: "SPlICE",
    input: "text",
    inputLabel:"CUANTOS VALORES?",
    showCancelBitton:true,
    inputValidator: (value)=>{
      if (!value){
        return "Ingreda valor valido!";
      }
    }
  });
  
  try{
    miarray.splice(pos,n);
    imprimirArray();
    
  } catch (error) {
    Swal.fire({
      title:"CECYTEM",
      text:"ERROR AL ELIMINAR",
      icon:"error"
      
    });
  }
  
  
  index.onclick=() =>{
    let pos=miarray.indexOf(parseInt(document.getElementById("index").value));
    Swal.fire({
      title:"ARRAY",
      text:"POSICION:"+pos,
      icon:"succes"
    })
  }
  
  
}



btnAdd.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.push(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+=`<h2>${miarray[i]}</h2>`;
    
  }
  items.innerHTML=nums;
}


reset.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.pop(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+=`<h2>${miarray[i]}</h2>`;
    
  }
  items.innerHTML=nums;
}


uns.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.unshift(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+=`<h2>${miarray[i]}</h2>`;
    
  }
  items.innerHTML=nums;
}

borra.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.shift();
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+=`<h2>${miarray[i]}</h2>`;
    
  }
  items.innerHTML=nums;
}



const imprimirArray=()=>{    
    let x="";
    for(let i=0;i<miarray.length;i++){
        x+=`<h3>${miarray[i]}</h3>`;
    }
    items.innerHTML=x
}

