const popup = document.querySelector('.login_popup');
const popbutton = document.querySelector('.login_button');
const span = document.querySelector('.close');
popbutton.addEventListener('click',function(){
    popup.style.display = "block";
});
span.addEventListener('click',function(){
    popup.style.display = "none";
});
window.addEventListener('click',function(event){
    if(event.target==popup){
        popup.style.display = "none";
    }
});