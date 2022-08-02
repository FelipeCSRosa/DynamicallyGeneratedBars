const container = document.querySelector('.limiter-container');
const bar = document.querySelector('#bar');

let arr = [120, 30, 20, 200, 100, 80, 199];
const max = Math.max(...arr);
const multplier = 100 / max;

let arrPercents = [];

for(let i = 0; i < arr.length; i++) {
  arrPercents.push(arr[i] * multplier);
}

console.log(arr);
console.log(arrPercents);

arrPercents.map(e => {
  container.innerHTML += `
    <div id="bar" style="height: ${e}%; background-color: ${e == 100 ? 'aquamarine' : 'lightsalmon'}"></div>
  `
})