const container = document.querySelector('main');

let dayOfWeekDigit = new Date().getDay();
if(dayOfWeekDigit == 0){
  dayOfWeekDigit = 6;
}else{
  dayOfWeekDigit -= 1;
}

let arrAmounts = [];
let arrDays = [];

for(let i = 0; i < data.dayliAmounts.length; i++){
  arrAmounts.push(data.dayliAmounts[i].amount)
}

for(let i = 0; i < data.dayliAmounts.length; i++){
  arrDays.push(data.dayliAmounts[i].day)
}

const max = Math.max(...arrAmounts);
const multplier = 100 / max;

let arrPercents = [];

for(let i = 0; i < arrAmounts.length; i++) {
  arrPercents.push((arrAmounts[i] * multplier) * 0.65);
}

let index = 0;

arrPercents.map(e => {
  console.log(arrPercents.indexOf(e));

  container.innerHTML += `
    <div class="bar-container">
      <div class="amount-info">$${arrAmounts[index]}</div>
      <div class="bar myBtn" style="background-color: ${arrPercents.indexOf(e) == dayOfWeekDigit ? '#76b5bc' : '#e3745d'}; height: ${e}%"></div>
      <h6>${arrDays[index]}</h6>
    </div>
  `
  index++;
})

const bar = document.querySelectorAll('.bar');
const amountInfo = document.querySelectorAll('.amount-info');

for (let i = 0; i < bar.length; i++) {
  bar[i].addEventListener('mouseenter', function (e) {  
    amountInfo[i].style.visibility = "visible";
  })
}

for (let i = 0; i < bar.length; i++) {
  bar[i].addEventListener('mouseout', function () {  
    amountInfo[i].style.visibility = "hidden";
  })
}


/* Modal */
var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".myBtn");
var span = document.getElementsByClassName("close")[0];

for(let i = 0; i < btn.length; i++){
  btn[i].onclick = function() {
    modal.style.display = "block";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}