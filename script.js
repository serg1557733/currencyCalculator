let currency;
const wrapper = document.querySelector('.cur__wrapper');
//confirm('You want to see all currency names?') ? showCurencys() : exchange();

function exchange() {
    ///currency = prompt('enter currency for exchange (usd, eur, rub...etc)');
    let url = 'https://open.er-api.com/v6/latest/' + currency.toUpperCase();
    if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'eur' || currency.toLowerCase() === 'rub') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let sum = prompt('enter amount');
                alert(`You usd summ : ${sum * data.rates.UAH} uah`);
            });
    } else if (currency) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let sum = prompt('enter amount');
                alert(`You usd summ : ${sum * data.rates.UAH} uah`);
            });
    } else {
        alert('Enter correct currency name');
    }
};

function showCurencys() {
    fetch('https://open.er-api.com/v6/latest').then(res => res.json())
        .then(data => {
            for (let key in data.rates) {
                let div = document.createElement('div');
                wrapper.appendChild(div);
                div.innerHTML =`<button class='btn_cur'> ${key}</button>`;
            }
            
            exchange();
        });
    }

showCurencys();