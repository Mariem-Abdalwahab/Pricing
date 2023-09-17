let btn = document.querySelector('.bttn span');
let price1 = document.querySelector('.box1 .price');
let price2 = document.querySelector('.box2 .price');
let price3 = document.querySelector('.box3 .price');



console.log(btn)
btn.addEventListener('click',()=>{
    btn.classList.toggle('rigth');
    if(btn.classList.contains('rigth')){
        price1.innerHTML = '$19.99';
        price2.innerHTML = '$24.99';
        price3.innerHTML = '$39.99';
    }
    else{
        price1.innerHTML = '$199.99';
        price2.innerHTML = '$249.99';
        price3.innerHTML = '$399.99';
    }
})