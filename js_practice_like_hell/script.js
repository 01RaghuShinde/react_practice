var btn = document.querySelector("#btn");
var para = document.querySelector("#para");
console.log(btn);
console.log(para);

btn.addEventListener("click",function(){
    para.textContent = "Say HEllo !";
})