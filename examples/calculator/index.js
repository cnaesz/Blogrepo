function Changetitle() {
    document.getElementById("test").style.fontSize = "35px";
    document.getElementById("test").innerHTML= 'DIDI avaz shod???';
    window.alert('alan pashmat mirize');
    console.log('hata injam avaz mishe KHODAYAAA MAN KIAAAAAM');
}

let quantity = 0

function showQuantity(){

  console.log(`Cart Quantity : ${quantity}`)

}

function addOne(){
  
  quantity += 1;
  console.log(`Cart Quantity : ${quantity}`)

}

function addTwo(){
  
  quantity += 2;
  console.log(`Cart Quantity : ${quantity}`)

}

function addThree(){
  
  quantity += 3;
  console.log(`Cart Quantity : ${quantity}`)

}

function resetQuantity(){

  quantity = 0
  console.log(`Cart was Reset.`)
  console.log(`Cart Quantity : ${quantity}`)

}