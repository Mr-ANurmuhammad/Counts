var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elBtn = document.querySelector(".btn");
var elSpan1 = document.querySelector(".span-man");
var elSpan2 = document.querySelector(".span-bicycle");
var elSpan3 = document.querySelector(".span-car");
var elSpan4 = document.querySelector(".span-airplane");


elForm.addEventListener("submit",function(event){
   event.preventDefault()


   var elResult = document.querySelector(".result");
   var elInputVal = elInput.value;
   var bike = 20.1;
   var car = 70;
   var airplane = 800;
   var speed = 3.6;

   elResult.classList.add("result-error")

   if (elInputVal <= 0 || NaN.elInputVal) {
      elResult.textContent = "0 dan katta raqam kiriting,faqat raqam";
      
      return;

   }
   else {
      elResult.innerHTML = null;
   }
   

   function calculateTime1(elInputVal) {
      var hour = Math.floor(elInputVal / speed)
      var minute = Math.floor(((elInputVal / speed) - hour) * 60)

      return hour + " soat" + minute  + " minut"

   }

   function calculateTime2(elInputVal) {
      var hour = Math.floor(elInputVal / bike)
      var minute = Math.floor(((elInputVal / speed) - hour) * 60)

      return hour + " soat" + minute  + " minut"

   }

   function calculateTime3(elInputVal) {
      var hour = Math.floor(elInputVal / car)
      var minute = Math.floor(((elInputVal / speed) - hour) * 60)

      return hour + " soat" + minute  + " minut"

   }

   function calculateTime4(elInputVal) {
      var hour = Math.floor(elInputVal / airplane)
      var minute = Math.floor(((elInputVal / speed) - hour) * 60)

      return hour + " soat" + minute  + " minut"

   }

   elSpan1.textContent = calculateTime1(elInputVal);
   elSpan2.textContent = calculateTime2(elInputVal);
   elSpan3.textContent = calculateTime3(elInputVal);
   elSpan4.textContent = calculateTime4(elInputVal);


})