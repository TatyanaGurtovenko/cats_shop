//Валидация формы
function validate() {
  let em = document.getElementById('email-input');
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let address = em.value;
  if(reg.test(address) == false) {
     alert('Введите корректный e-mail');
     return false;
  }
}
let btn = document.getElementById('email__btn');
btn.addEventListener('click', ()=>{
  validate();
})


//Scroll
var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else {
     clearTimeout(timeOut)
    }
}
let scroll = document.getElementById('scroll-top');
scroll.addEventListener('click', ()=>{
  goUp();
})

//Sort price
document.querySelector('.filter-price').onclick = sortPrice;
function sortPrice() {
  let catsList = document.querySelector('.cats__list ');
  let len = catsList.children.length;
 
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len; j++){
      if (+catsList.children[i].getAttribute('data-price') > +catsList.children[j].getAttribute('data-price')){
        replacedNode = catsList.replaceChild(catsList.children[j], catsList.children[i]);
        insertAfter(replacedNode, catsList.children[i]);
      }
    }
  }
}
//Sort age
document.querySelector('.filter-age').onclick = sortAge;
function sortAge() {
  let catsList = document.querySelector('.cats__list ');
  let len = catsList.children.length;
 
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len; j++){
      if (+catsList.children[i].getAttribute('data-age') > +catsList.children[j].getAttribute('data-age')){
        replacedNode = catsList.replaceChild(catsList.children[j], catsList.children[i]);
        insertAfter(replacedNode, catsList.children[i]);
      }
    }
  }
}

function insertAfter(el, refEl) {
  return refEl.parentNode.insertBefore(el, refEl.nextSiblings);
}

//Burger
let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('hidden');
})