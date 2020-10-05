const container = document.querySelector('.holl');
const seats = document.querySelectorAll('.rows .seat:not(occupied)');
let total = document.querySelector('.total');
const price = document.querySelector('.price');
const button = document.querySelector('.end');

const ticketPrice = price.id;

let i =0;

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('selected') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        i+=1;
        document.getElementById('total').innerHTML=i*ticketPrice;
    }
});

button.addEventListener('click', () => {
    document.getElementById('total').innerHTML = 0;
});