const textareaEl = document.getElementById('textarea');

const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

const counterUpdate = ()=>{
    totalCounterEl.innerText = textareaEl.value.length;
    // console.log('Hello world!!');
    remainingCounterEl.innerText  = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
    
}
textareaEl.addEventListener("keyup", counterUpdate);
