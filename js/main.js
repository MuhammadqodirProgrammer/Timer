// console.log("Assalomu alaykum");
const elBtns = document.querySelector(".btn-group");
const elHeading = document.querySelector(".js-heading");
const elInput = document.querySelector(".js-input");
const elForm = document.querySelector(".js-form");


function BoilingFunc(res,node) {
  const elBtn =document.createElement('button')
  elBtn.setAttribute(
    'class',
    'btn-create spinners spinner-grow bg-warning'
    )
   var num = +res.value + 1

      const setIn = setInterval(()=>{
        num --
        elBtn.textContent =num 
      },1000)
      
      setTimeout(()=>{
        elBtn.remove()
        clearInterval(setIn)
      }, num * 1000)
    res.value = ""
  node.appendChild(elBtn)
}



elForm.addEventListener('click',function (evt){
  evt.preventDefault()
  if (elInput.value !== "") {
    BoilingFunc(elInput,elBtns)
    // timeOut(elInput,elBtns)
  }
console.log(elInput.value);
})




