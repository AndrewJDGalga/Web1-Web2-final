import { getCSVContent, makeBlocks, createTableCell } from "./utility.js";
const orderForm = document.getElementById('order-form');
const orderFormBtn = document.querySelector('#order-form button');
const orderCSVLocation = '../data/online_items.csv';

const content = await getCSVContent(orderCSVLocation);

const taxPercent = 0.0825;
let cart = {
    setItem(name, price) {
        cart[name] = {
            "price" : price,
            "count" : 0
        };
    },
    baseTotal() {
        let total = 0;
        for(const key in cart){
            const price = (cart[key].price === undefined) ? 0.00 : cart[key].price;
            const count = (cart[key].count === undefined) ? 0 : cart[key].count;
            total += price * count;
        }
        return total;
    },
    finalTotal(tax){
        const base = this.baseTotal();
        const percentTax = base * tax;
        return base + percentTax;
    }
};

function changeCount(e) {
    //onchange triggered through manual entering of invalid values, must check
    if(e.target.value < 0 || e.target.value > e.target.max) return;
    cart[e.target.id].count = parseInt(e.target.value);
}

if(content != ''){
    const rows = makeBlocks(content);
    const bodyRows = rows.slice(1);
    const formFrag = document.createDocumentFragment();

    for(let i = 0; i < bodyRows.length; i++) {
        const field = document.createElement('fieldset');

        const legend = document.createElement('legend');
        legend.textContent = bodyRows[i][0];
        field.append(legend);

        const price = document.createElement('p');
        price.textContent = 'Price: ' + bodyRows[i][1];
        field.append(price);

        const amt = document.createElement('input');
        amt.type = 'number';
        const forRef = bodyRows[i][0].toLowerCase().replaceAll(' ', '');
        amt.id = forRef;
        amt.dataset.price = parseFloat(bodyRows[i][1].replace('$',''));
        amt.min='0';
        amt.max=`${bodyRows[i][2]}`;
        amt.value = '0';
        amt.onchange = changeCount;
        const amtLabel = document.createElement('label');
        amtLabel.htmlFor = forRef;
        amtLabel.textContent = `Order? (less than ${bodyRows[i][2]}): `;
        field.append(amtLabel, amt);
        
        formFrag.append(field);

        cart.setItem(forRef, amt.dataset.price);
    }

    orderForm.insertBefore(formFrag, orderFormBtn);
}

orderForm.onsubmit = (e) => {
    e.preventDefault();
    alert('Your total: $' + cart.finalTotal(taxPercent).toFixed(2));
}