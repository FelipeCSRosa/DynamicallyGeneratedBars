const container = document.querySelector('main');

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
  arrPercents.push((arrAmounts[i] * multplier) * 0.75);
}

console.log(arrPercents)

let index = 0;

arrPercents.map(e => {
  container.innerHTML += `
    <div class="bar-container">
      <div class="bar" style="background-color: ${e == 75 ? '#76b5bc' : '#e3745d'}; height: ${e}%"></div>
      <h6>${arrDays[index]}</h6>
    </div>
  `
  index++;
})