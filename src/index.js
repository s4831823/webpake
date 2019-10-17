
import  "./sass/style.scss";
// import $ from 'jquery';
import Tweenmax from "gsap";

$('.box').addClass("box-width");
const box  =  $('.box');
Tweenmax.to('.box' , .5 ,{
  x: 200,
  y: 100,
  repeat: 18,
  yoyo :  true
})


console.log('index ok');