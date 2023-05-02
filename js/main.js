const button = document.querySelector('.play-bt');
const buttons = document.querySelector('.play-btns');
function show(event) {console.log('error');};
button.addEventListener('click', () => {show();})
buttons.addEventListener('click', () => {show();})
let menu = document.querySelector('.menu')
let menuBtn = document.querySelector('.menu-btn')
let lineBtn = document.querySelector('.rotate')
let lineBtntwo = document.querySelector('.rotatetwo')

menuBtn.addEventListener('click' , () => {document.body.querySelector('.rotate').classList.toggle("rotatefree"); document.body.querySelector('.bg').classList.toggle("bgtwo");
});
menuBtn.addEventListener('click' , () => {document.body.querySelector('.rotatetwo').classList.toggle("rotatefree");});
menuBtn.addEventListener('click' , () => {document.body.querySelector('.mb').classList.toggle('menu-blocktwo');document.body.querySelector('.mb').classList.toggle('menu-block')})
let bg = document.querySelector('.bg')
let bgtwo = document.querySelector('.bgtwo')
bg.addEventListener('click' , () => {
  document.body.querySelector('.mb').classList.toggle('menu-block');
  document.body.querySelector('.rotate').classList.toggle("rotatefree");
  document.body.querySelector('.rotatetwo').classList.toggle("rotatefree");
  document.body.querySelector('.bg').classList.toggle("bgtwo");
  document.body.querySelector('.mb').classList.toggle('menu-blocktwo');
  })



