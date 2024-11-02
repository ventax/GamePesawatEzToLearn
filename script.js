const object = document.querySelector('#object')
const arena = document.querySelector('#arena')
const btnUp = document.querySelector('#btnUp')
const btnDown = document.querySelector('#btnDown')
const btnRight = document.querySelector('#btnRight')
const btnLeft = document.querySelector('#btnLeft')
const SizeArena = arena.getBoundingClientRect();


btnUp.addEventListener('click',()=>{
    let SizeObject = object.getBoundingClientRect();
    if(SizeObject.top<=SizeArena.top){
        alert('mentok atas bang');
    }else{
        object.style.top = object.offsetTop-5+"px";
    }
});
btnDown.addEventListener('click',()=>{
    let SizeObject = object.getBoundingClientRect();
    if(SizeObject.bottom>=SizeArena.bottom){
        alert('mentok bawah bang');
    }else{
        object.style.top = object.offsetTop+5+"px";
    }
});

btnRight.addEventListener('click',()=>{
    let SizeObject = object.getBoundingClientRect();
    if(SizeObject.right>=SizeArena.right){
        alert('mentok kanan bang');
    }else{
        object.style.left = object.offsetLeft+5+"px";
    }
});

btnLeft.addEventListener('click',()=>{
    let SizeObject = object.getBoundingClientRect();
    if(SizeObject.left<=SizeArena.left){
        alert('mentok kiri bang');
    }else{
        object.style.left = object.offsetLeft-5+"px";
    }
});
