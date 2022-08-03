const container = document.querySelector('.limiter-container');

let arr = [30, 60, 100, 50, 40, 70, 45];


let arrData = [];

for(let i = 0; i < data.dayliAmounts.length; i++){
  arrData.push(data.dayliAmounts[i].amount)
}

const max = Math.max(...arrData);
const multplier = 100 / max;

let arrPercents = [];

for(let i = 0; i < arrData.length; i++) {
  arrPercents.push(arrData[i] * multplier);
}


let index = 0;

arrPercents.map(e => {
  container.innerHTML += `
    <div class="bar" style="height: ${e}%; background-color: ${e == 100 ? '#76b5bc' : '#e3745d'}; color: ${e == 100 ? '#76b5bc' : '#e3745d'}">${arrData[index]}</div>
  `
  index++;
})

const bar = document.querySelectorAll('.bar');

for(let i = 0; i < bar.length; i++){
  bar[i].addEventListener("mouseenter", function( event ) {
    event.target.classList.add("whiteColor");
  })
}

for(let i = 0; i < bar.length; i++){
  bar[i].addEventListener("mouseout", function( event ) {
    event.target.classList.remove("whiteColor");
  })
}
